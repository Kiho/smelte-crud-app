<script>
    import { createEventDispatcher, onMount } from 'svelte';    
    import { onCreate } from './field-base';

    const dispatch = createEventDispatcher();

    export let input = null;
    export let value = false;
    export let className = '';
    export let label = '';
    export let submit = false;
    export let error = '';
    export let uuid = ''
    export let dataset = null;

    function setError(err, sbmt) {
        error = err;
        if (sbmt != undefined) {
            submit = sbmt;
        }
    }

    let arg = {
        uuid, dataset, submit, error, setError
    }

    onMount(() => {
        onCreate(input, arg);
    });
</script>

<input 
    type="checkbox"
    bind:this={input}
    bind:checked="{value}"
    class="{className}"
    on:change="{event => dispatch('change', event)}"
    on:keydown 
    on:focus 
/>

<style>
    input {
        margin: 0 0 0 0.5rem;
    }
</style>