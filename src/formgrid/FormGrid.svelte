<script>    
    import FormCol from './FormCol.svelte';

    export let form = null;
    export let item = {};
    export let columns = [];
    export let className = '';
    export let edit = true;

    // export let source;
    // $: {
    //     source = item;
    // }

    export let fieldRows;
    $: {                
        const maxRowNum = Math.max.apply(Math, columns.map(o => o.row))
        const rows = [];
        for (let i = 0; i <= maxRowNum; i++) {
            rows.push({ columns: [] });
        }
        columns.forEach(col => {
            const row = rows[col.row];
            if (row && row.columns) {
                row.columns.push(col);
                if (col.subtitle) {
                    row.subtitle = col.subtitle;
                }
            }                
        });
        console.log('computed - rows', rows);
        fieldRows = rows;
    }
</script>

<form class="form-horizontal" bind:this={form}>
{#each fieldRows as row}
    {#if row.subtitle}
    <div class="row subtitle">{row.subtitle}</div>
    {/if}
    <div class="row {className}">
        {#each row.columns as col}
        <FormCol settings="{col}" bind:source="{item}" {edit} />
        {/each}
    </div>
{/each}
</form>

<style>
    .subtitle {
        margin: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        text-decoration: underline;
        text-transform: uppercase;
    }
</style>