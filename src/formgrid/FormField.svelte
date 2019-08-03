<script>
    import { onMount } from 'svelte';   
    import { TextField, Select } from "smelte";

    import {
        // TextInput,
        // SelectInput,
        NumberInput,
        CurrencyInput,
        MaskedInput,
    } from './inputs';
    import Field from './Field.svelte';
    import { makeUniqueId } from '../utils';

    export let settings = null;
    export let component = null;
    export let value = '';
    export let uuid = makeUniqueId();

    let props = $$props;

    onMount(() => {
        console.log('FormField', props);
    });

    export let fieldlabel;
    $: {
        fieldlabel = settings ? settings.label : '';
    }

    export let fieldtype;
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

<Field {settings} withSettings={true} {fieldtype} bind:value />