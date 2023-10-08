import { WebSocket } from "isows";

const ws = new WebSocket(
  "wss://ws-ap1.pusher.com:443/app/78a7f9604f977d235435",
);
ws.onopen = () => (document.getElementById("app")!.innerText = "success");
