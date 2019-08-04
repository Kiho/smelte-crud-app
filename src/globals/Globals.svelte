<script>
  import { alertStore, confirmStore } from './stores';
  import { Snackbar, Dialog, Button } from 'smelte';
</script>

<!-- These components can be in their own svelte files of course and gathered here or in App.svelte -->
{#if $alertStore.length}
  <div>
    {#each $alertStore as data (data.id)}
      <Snackbar value={true}>
        <div>{data.message}</div>
        <div slot="action">
          <Button text on:click={data.close}>Dismiss</Button>
        </div>
      </Snackbar>
    {/each}
  </div>
{/if}

{#if $confirmStore}
  <Dialog value={true}>
    <h5 slot="title">Application</h5>
    <div class="text-gray-700">{$confirmStore.message}</div>
    <div slot="actions">
      <Button on:click={() => $confirmStore.resolve(false)}>Cancel</Button>
      <Button on:click={() => $confirmStore.resolve(true)}>OK</Button>
    </div>
  </Dialog>
{/if}
