<script>
	import { createEventDispatcher } from 'svelte';
  import { Dialog } from "smelte";
  import { Button } from "smelte";

  export let showModal = false;
	const dispatch = createEventDispatcher();

	export let modalSize = 'default';
	export let title = '';

	let formTitle;
	$: formTitle = title ? title : '&nbsp';
</script>

<Dialog bind:value={showModal}>
  <h5 slot="title">{@html formTitle}</h5>
	<div class="tall-dialog">
  	<slot></slot>
	</div>
  <div slot="actions">
		<Button on:click='{() => dispatch("close")}'>Close</Button>
		<Button on:click='{() => dispatch("save")}'>Save Changes</Button>
  </div>
</Dialog>

<style>
	.tall-dialog {
		width: 500px;
		min-height: 300px;
	}
</style>