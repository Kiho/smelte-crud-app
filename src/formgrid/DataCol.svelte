<script>
    import {
        ActionButton,
        TextInput,
        SelectInput,
        NumberInput,
        CurrencyInput,
        CheckboxInput,
        MaskedInput,
    } from './inputs';

    function collect(obj, field) {
        if (typeof(field) === 'function')
            return field(obj);
        else if (typeof(field) === 'string')
            return obj[field];
        else
            return undefined;
    }

    export let settings;
    export let edit;
    export let source = {};

    // [svelte-upgrade warning]
    // this function needs to be manually rewritten
    // export let props;
    // $: { 
    //     props = all.settings || all;
    // }

    export let fieldtype;
    $: {
        let ft = TextInput;
        if (settings.component) {
            switch (settings.component.toLowerCase()) {
                case 'text':
                    ft = TextInput;
                    break;
                case 'number':
                    ft = NumberInput;
                    break;    
                // case 'masked':
                //     ft = MaskedInput;
                //     break;
                // case 'currency':
                //     ft = CurrencyInput;
                //     break;
                case 'date':
                    ft = MaskedInput;
                    break;
                case 'select':
                    ft = SelectInput;
                    break;
                case 'checkbox':
                    ft = CheckboxInput;
                    break;
                case 'action':
                    ft = ActionButton;
                    break;
            }
        }
        fieldtype = ft;
    }
</script>

{#if edit || settings.action}
    <svelte:component this="{fieldtype}" label="{settings.label}" bind:value="{source[settings.field]}" on:change on:click on:keydown on:focus />
{:else}
    {collect(source, settings.field)}
{/if}