
export const config = {
  api: {
    bodyParser: false, // We'll handle the file upload stream manually
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 1. Authorize with B2
    const auth = await fetch("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.B2_KEY_ID + ":" + process.env.B2_APPLICATION_KEY
          ).toString("base64"),
      },
    });
    const authData = await auth.json();
    if (!auth.ok) {
      return res.status(500).json({ error: "Backblaze authorization failed" });
    }

    // 2. Get upload URL
    const uploadUrlRes = await fetch(
      authData.apiInfo.storageApi.baseUrl + "/b2api/v2/b2_get_upload_url",
      {
        method: "POST",
        headers: {
          Authorization: authData.authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bucketId: process.env.B2_BUCKET_ID,
        }),
      }
    );
    const uploadUrlData = await uploadUrlRes.json();
    if (!uploadUrlRes.ok) {
      return res.status(500).json({ error: "Failed to get upload URL from B2" });
    }

    // 3. Pipe the file from the request to B2
    const fileName = req.headers["x-file-name"];
    if (!fileName || typeof fileName !== "string") {
      return res.status(400).json({ error: "Missing X-File-Name header" });
    }

    const b2Res = await fetch(uploadUrlData.uploadUrl, {
      method: "POST",
      headers: {
        Authorization: uploadUrlData.authorizationToken,
        "X-Bz-File-Name": encodeURIComponent(fileName),
        "Content-Type": req.headers["content-type"] || "b2/x-auto",
        "X-Bz-Content-Sha1": "do_not_verify", // For small uploads
      },
      body: req,
    });
    const b2Data = await b2Res.json();
    if (!b2Res.ok) {
      return res.status(500).json({ error: "Failed to upload file to B2", details: b2Data });
    }

    // 4. Return the public URL
    const publicUrl = `${authData.downloadUrl}/file/${b2Data.bucketName}/${b2Data.fileName}`;
    return res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error("B2 upload error:", error);
    return res.status(500).json({ error: "B2 upload failed" });
  }
}
