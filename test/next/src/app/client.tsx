"use client";

import { useEffect, useState } from "react";

export function Client() {
  const [success, setSuccess] = useState<boolean | undefined>();
  useEffect(() => {
    const ws = new WebSocket(
      "wss://ws-ap1.pusher.com:443/app/78a7f9604f977d235435",
    );
    ws.onopen = () => setSuccess(true);
  }, []);
  return <div>client: {success ? "success" : ""}</div>;
}
