<script>
    import FormField from './FormField.svelte';
    import { omitProps } from '../utils';

    export let settings = {};
    export let source = {};
    export let edit;

    export let classes;
    $: {                
        if (settings.col) {
            let cols = settings.col.split(' ');
            cols = cols.filter(x => x && x.trim()).map(x=> 'col-' + x);
            classes = cols.join(' ').trim();
        }
    }

    let field, component;
    $: field = settings.field;
    $: component = settings.component;
    
    let displayable;
    $: {
         displayable = source && (source.hasOwnProperty(field) && source[field] != null);
    }

    let fieldProps 
    $: {
        fieldProps = omitProps(settings, 'field', 'component', 'row', 'col', 'settings', 'withSettings', 'fieldtype');
    }
</script>

<div class={classes}>
    {#if edit}
        <FormField bind:value="{source[field]}" settings="{fieldProps}" {component} />
    {:else if displayable}
        { source[field] }
    {/if}
</div>