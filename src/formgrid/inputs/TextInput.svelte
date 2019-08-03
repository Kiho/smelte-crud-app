<script>
    import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
    import { onCreate } from './field-base';

    const dispatch = createEventDispatcher();

    export let input = null;
    export let inputClass = '';
    export let placeholder = '';
    export let value = '';
    export let readonly = false;
    export let required = false;
    export let type = 'text';
    export let label = '';
    export let text = '';
    export let className = '';
    export let pattern = '';
    export let validate = null;
    export let uniqueId = false;
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
    };

    onMount(() => {
        onCreate(input, arg);
    });

    afterUpdate(() => {
        if (error)
            console.log('error -> ', error, submit, arg);
    });
</script>

<input 
    type='text' 
    bind:this={input}
    class="form-control {inputClass}"  
    placeholder="{placeholder}" 
    bind:value
    readonly="{readonly}"
    required="{required}" 
    on:change="{event => dispatch('change', event)}"
    on:keydown 
    on:focus   
    />