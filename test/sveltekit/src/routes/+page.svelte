<script>
import { WebSocket } from "isows";

const promise = ws();
async function ws() {
  await new Promise((res) => {
    const ws = new WebSocket(
      "wss://ws-ap1.pusher.com:443/app/78a7f9604f977d235435",
    );
    ws.onopen = () => res(null);
  });
}
</script>

<div>server: success</div>
<p>
	{#await promise}
		Loading...
	{:then blockNumber}
		client: success
	{:catch error}
		Error: {error.message}.
	{/await}
</p>