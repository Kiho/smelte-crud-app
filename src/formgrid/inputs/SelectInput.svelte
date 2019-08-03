<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { onCreate } from './field-base';

    const dispatch = createEventDispatcher();

    export let input = null;
    export let items = [];
    export let inputClass = '';
    export let value = '';
    export let optionValue = 'id';
    export let getOptionName = (x) => x.name;
    export let label = '';
    export let submit = false;
    export let error = '';
    export let uuid = ''
    export let dataset = null;

    function setError(error1, submit1) {
        error = error1;
        if (submit != undefined) {
            submit = submit1;
        }
    }

    let arg = {
        uuid, dataset, submit, error, setError
    }

    onMount(() => {
        onCreate(input, arg);
    });

    export let isObjectOptions;
    $: {
        const listType = typeof items[0];
        isObjectOptions = items ? listType === 'object' : false;
    }
</script>

<select class="form-control {inputClass}" bind:value="{value}" bind:this={input} on:change="{event => dispatch('change', event)}">
    {#if isObjectOptions }
        {#each items as opt}        
            <option value={opt[optionValue]}>{getOptionName(opt)}</option>        
        {/each}
    {:else}
        {#each items as opt}        
            <option>{opt}</option> 
        {/each}                                   
    {/if}
</select>