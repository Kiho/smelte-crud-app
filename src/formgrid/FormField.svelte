<script>
    import { onMount } from 'svelte';   
    import { TextField, Select } from "smelte";

    import {
        NumberInput,
        CurrencyInput,
        MaskedInput,
    } from './inputs';

    export let settings = {};
    export let component = null;
    export let value = '';    
    export let fieldtype;

    const inputs = 'input, select, textarea'; 

    let self;
    let submit = false;
    let error = '';

    let props = $$props;

    function setError(error1, submit1) {
        error = error1;
        if (submit1 != undefined) {
            submit = submit1;
        }
    }

    function onKeyup(e) {
        if (submit) {
            error = e.target.checkValidity() ? '' : e.target.validationMessage;       
        }
    }

    onMount(() => {
        const inputNode = self.querySelector(inputs);
        if (inputNode) {
            inputNode.setError = setError;
            inputNode.onkeyup = onKeyup;
        }
    });

    $: {
        let ft = TextField;
        if (component) {
            switch (component.toLowerCase()) {
                case 'currency':
                    ft = CurrencyInput;
                    break;
                case 'masked':
                    ft = MaskedInput;
                    break;
                case 'number':
                    ft = NumberInput;
                    break;
                case 'select':
                    ft = Select;
                    break;
            }
        }
        fieldtype = ft;
    }
</script>

<div bind:this="{self}">
    <svelte:component this="{fieldtype}" {...props} {...settings} bind:value bind:submit bind:error />
</div>
