<script>
    import { createEventDispatcher } from 'svelte';
    import { Button } from "smelte";

    const dispatch = createEventDispatcher();

    export let className = '';
    export let label = '';
    export let value = false;
</script>

<Button  on:click="{event => dispatch('click', event)}">{label}</Button>