import { WebSocket as WebSocketNode_ } from "ws";
import { getNativeWebSocket } from "./utils.js";

export const WebSocket = (() => {
	try {
		return getNativeWebSocket();
	} catch {
		return WebSocketNode_;
	}
})();
