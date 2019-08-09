<script>    
    import { makeUniqueId } from '../utils';
    import { afterUpdate, onMount } from 'svelte';
    import { omitProps } from '../utils';

    export let submit = false;
    export let error = '';
    export let settings = null;
    // export let uuid = makeUniqueId();
    export let fieldtype = null;
    export let value = '';
    export let withSettings = false;
    export let type = 'text';
    export let placeholder = '';
    export let inputClass = '';
    export let text = '';
    export let className = '';
    export let readonly = false;
    export let required = false;
    export let pattern = '';
    export let validate = null;
    export let uniqueId = false;

    const focusable = 'button, [href], input, select, textarea';    
    let self;

    let props = $$props;
    $: { 
        props = withSettings ? omitProps(settings, 'settings', 'withSettings', 'fieldtype') : props;
        console.log('Field', props);
    }

    function setError(error1, submit1) {
        error = error1;
        if (submit != undefined) {
            submit = submit1;
        }
    }

    onMount(() => {
        const inputNode = self.querySelector(focusable);
        if (inputNode) {
            inputNode.setError = setError;
        }
    });

    export let message;
    $: {
        message = submit ? error : '';
    }

    export let label;
    $: { 
        label = settings ? settings.label : null;
    }
</script>

<div bind:this="{self}">
    <svelte:component this="{fieldtype}" {...props} bind:value bind:submit bind:error />
</div>
