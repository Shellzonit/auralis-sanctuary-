import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const auth = await fetch("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
			headers: {
				Authorization: "Basic " + Buffer.from(
					process.env.B2_KEY_ID + ":" + process.env.B2_APPLICATION_KEY
				).toString("base64")
			}
		});

		const authData = await auth.json();

		const uploadUrlResponse = await fetch(
			authData.apiInfo.storageApi.baseUrl + "/b2api/v2/b2_get_upload_url",
			{
				method: "POST",
				headers: {
					Authorization: authData.authorizationToken
				},
				body: JSON.stringify({
					bucketId: process.env.B2_BUCKET_ID
				})
			}
		);

		const uploadUrlData = await uploadUrlResponse.json();

		return res.status(200).json({
			uploadUrl: uploadUrlData.uploadUrl,
			authorizationToken: uploadUrlData.authorizationToken
		});
	} catch (error) {
		console.error("Error getting upload URL:", error);
		return res.status(500).json({ error: "Failed to get upload URL" });
	}
}
