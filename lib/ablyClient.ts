import { Realtime } from "ably";

let client: Realtime | null = null;

export function getAblyClient() {
  if (!client) {
    client = new Realtime({
      key: process.env.NEXT_PUBLIC_ABLY_KEY as string,
    });
  }
  return client;
}
