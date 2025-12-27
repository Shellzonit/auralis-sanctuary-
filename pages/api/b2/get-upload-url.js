export default async function handler(req, res) {
  try {
    const auth = await fetch("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
      headers: {
        Authorization: "Basic " + Buffer.from(
          process.env.B2_KEY_ID + ":" + process.env.B2_APPLICATION_KEY
        ).toString("base64")
      }
    });

    const authData = await auth.json();

    if (!auth.ok) {
      console.error("Backblaze auth error:", authData);
      return res.status(500).json({ error: "Backblaze authorization failed" });
    }
console.log("AUTH RESPONSE:", authData);

    // List files in the B2 bucket
    const listFilesResponse = await fetch(
      authData.apiInfo.storageApi.baseUrl + "/b2api/v2/b2_list_file_names",
      {
        method: "POST",
        headers: {
          Authorization: authData.authorizationToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          bucketId: process.env.B2_BUCKET_ID,
          maxFileCount: 100
        })
      }
    );

    const listFilesData = await listFilesResponse.json();

    if (!listFilesResponse.ok) {
      console.error("Backblaze list files error:", listFilesData);
      return res.status(500).json({ error: "Failed to list files from Backblaze" });
    }

    // Construct public URLs for each file (assuming all are public)
    const files = (listFilesData.files || []).map(file => {
      return `${authData.downloadUrl}/file/${file.bucketName}/${file.fileName}`;
    });

    return res.status(200).json({
      files
    });
  } catch (error) {
    console.error("Error getting upload URL:", error);
    return res.status(500).json({ error: "Failed to get upload URL" });
  }
}
