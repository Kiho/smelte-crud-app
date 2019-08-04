<script>
  import { afterUpdate, createEventDispatcher } from 'svelte';
  import { slide } from "svelte/transition";
  import DataCol from './DataCol.svelte';
  import { Icon, ProgressLinear } from "smelte";

  const dispatch = createEventDispatcher();

  export let edit = true;
  export let columns = [];
  export let rows = [];
  export let selected = null;
  export let loading = false;
  export let hideProgress = false;
  export let wrapperClasses = "rounded elevation-3 relative text-sm overflow-x-auto";

  function setRowCol(settings, i, j) {
    settings.dataset = { row: i, col: j };
    return settings;
  }

  let prevSelected;
  afterUpdate(() => {
    if (prevSelected && selected) {
      let s = prevSelected;
      const el = table.querySelector( 
          `[data-row="${s[0]}"][data-col="${s[1]}"]` 
      );
      // console.log(s, el);
      if (el) el.focus();
    }
  });

  function actionClick(event, row, action) {
      event && event.preventDefault();
      action && action(row);
  }

  function arrow(e) {
    const { target: node, keyCode: code} = e;
    if (code < 37 || code > 40) return;

    let i = +node.dataset.row;
    let j = +node.dataset.col;

    if (code === 37) j = Math.max(0, j - 1);
    if (code === 39) j = Math.min(j + 1, columns.length - 1);
    if (code === 38) i = Math.max(0, i - 1);
    if (code === 40) i = Math.min(i + 1, rows.length - 1);
    
    selected = [ i, j ];
  }

  export let asc = false;
  let sortBy = null;

  $: sorted = sort(sortBy);

  function sort(col) {
    if (!col) return rows;

    if (col.sort) return col.sort(rows);

    const sorted = rows.sort((a, b) => {
      const valA = col.value ? col.value(a) : a[col.field];
      const valB = col.value ?  col.value(b) : b[col.field];

      const first = asc ? valA : valB;
      const second = asc ? valB : valA;

      if (typeof valA === 'number') {
        return first - second;
      }

      return ('' + first).localeCompare(second);
    });
  console.log(sorted);
    return sorted;
  }    
</script>

<style>
  th, td {
    @apply p-3 font-normal text-right;
  }

  th:first-child, td:first-child {
    @apply text-left border-r;
  }

  th {
    @apply text-gray-600 text-xs cursor-pointer;
  }

  th .asc {
    transform: rotate(180deg);
  }

  th .sort-wrapper {
    @apply flex items-center justify-end;
  }

  th:first-child .sort-wrapper {
    @apply justify-start;
  }

  th .sort {
    @apply w-4 h-4 opacity-0 transition-fast;
  }

  th:hover {
    @apply text-black transition-fast;
  }

  th:hover .sort {
    @apply opacity-100;
  }

  tr {
    @apply border-gray-200 border-t border-b px-3;
  }

  tr:hover {
    @apply bg-gray-50;
  }

  tr.selected {
    @apply bg-primary-50;
  }
</style>

<table class={wrapperClasses}>
  <thead class="items-center">
    <tr>
    {#each columns as column, i}
      <slot name="header">
        <th
          class="capitalize"
          on:click={() => {
            if (column.sortable === false) return;
            asc = sortBy === column ? !asc : false;
            sortBy = column;
          }}
        >
          <div class="sort-wrapper">
            {#if column.sortable !== false}
              <span class="sort" class:asc={!asc && sortBy === column}>
                <Icon small color="text-gray-400">arrow_downward</Icon>
              </span>
            {/if}
            <span>{column.label || column.field}</span>
          </div>
        </th>
      </slot>
    {/each}
    </tr>
  </thead>
  {#if loading && !hideProgress}
    <div class="absolute w-full" transition:slide>
      <ProgressLinear />
    </div>
  {/if}
  <tbody>
    {#each rows as row, i}
      <tr>
        {#each columns as column, j}
          <td class="{column.class || ''} { ((!edit && column.action) || edit) ? 'nopadding' : '' } { column.numeric ? 'numeric' : ''} { column.truncate ? ' truncate' : '' }" 
              style="width: { column.width ? column.width : 'auto' }">
            <DataCol bind:source="{row}" {edit} 
              settings="{setRowCol(column, i, j)}"
              on:change="{event => dispatch('update', { event })}" 
              on:click="{event => actionClick(event, row, column.action)}"
              on:keydown="{arrow}"
              on:focus="{() => selected = [i, j]}"
            />
          </td>    
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<!-- <style>
    td.nopadding {
		padding: 0 0;
	}
	td.nopadding :global(input) {
		padding: 0.35rem 0.5rem;
		border-width: 0;
		/* background-color: transparent; */
	}
</style> --> 