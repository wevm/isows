import { WebSocket } from "isows";

export const config = {
  runtime: "nodejs18.x",
};

export async function load() {
  await new Promise<void>((res) => {
    const ws = new WebSocket(
      "wss://ws-ap1.pusher.com:443/app/78a7f9604f977d235435",
    );
    ws.onopen = () => res();
  });

  return {
    success: true,
  };
}
