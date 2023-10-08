import { WebSocket } from "../../src/_esm/native.js";

const ws = new WebSocket(
  "wss://ws-ap1.pusher.com:443/app/78a7f9604f977d235435",
);
ws.onopen = () => Deno.exit(0);
