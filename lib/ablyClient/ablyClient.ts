// ablyClient.ts
// This file initializes and exports an Ably Realtime client instance.

import Ably from "ably/promises";

// Create a single shared Ably client instance.
// This works in both browser and server environments.
let ablyClient: Ably.RealtimePromise | null = null;

export function getAblyClient() {
	if (!ablyClient) {
		const apiKey = process.env.ABLY_API_KEY;

		if (!apiKey) {
			throw new Error("ABLY_API_KEY is missing. Check your .env.local and Vercel settings.");
		}

		ablyClient = new Ably.Realtime.Promise({
			key: apiKey,
			clientId: "sanctuary-user", // optional but helpful for presence
		});
	}

	return ablyClient;
}

// Helper to get a channel anywhere in your app
export function getAblyChannel(channelName: string) {
	const client = getAblyClient();
	return client.channels.get(channelName);
}
