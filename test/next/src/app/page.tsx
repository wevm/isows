import { WebSocket } from "isows";
import { Client } from "./client";

export default async function Home() {
  await new Promise<void>((res) => {
    const ws = new WebSocket(
      "wss://ws-ap1.pusher.com:443/app/78a7f9604f977d235435",
    );
    ws.onopen = () => res();
  });
  return (
    <>
      <div>server: success</div>
      <Client />
    </>
  );
}
