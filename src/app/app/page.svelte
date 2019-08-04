<script>
    import { afterUpdate, onMount } from 'svelte';    
    import { Button } from "smelte";

    import { DataGrid, FormGrid } from '../../formgrid';
    import Modal from '../app/modal.svelte';
    import appPage from '../../services/appPage';

    export let title = '';
    export let columndata = [];
    export let partial = null;
    export let instance = null;
    export let list = [];
    export let showModal = false;
    export let selectedItem = {};
    export let path = '';
    export let fielddata = [];
    export let form = null;
    export let loading = false;

    let initialized = false;
    const app = Object.assign({}, appPage);

    $: {
        if (path && instance) {            
            if (!initialized) initialized = true;
        }
    }

    $: if (initialized) {
        partial.oncreate(instance).then(getList);
    }

    export function close() {
        app.close.call(instance);
    }

    function add(e) {
        app.add.call(instance, e);
    }

    function save(item, e) {
        app.save.call(instance, item, e);
    }

    export function remove(item, e) {
        app.remove.call(instance, item, e);
    }

    export function edit(item, e) {
        app.edit.call(instance, item, e);
    }

    export function getList() {
        app.getList.call(instance);
    }
    
    export function getListByName(path) {
        return app.getListByName.call(instance, path);
    }
</script>

<svelte:options accessors={true}/>

<div>
    <h4 class="capitalize pb-8">{title}</h4>
    <div class="py-2">
        <DataGrid bind:rows="{list}" bind:columns="{columndata}" edit={false} {loading} />
    </div>
    <div class="py-2">
        <Button on:click='{add}'>Add New</Button>
    </div> 
    <div>
        <div class=form-group bind:this="{form}">
            <Modal bind:showModal on:close="{close}" on:save="{(e) => save(selectedItem, e)}" title={selectedItem ? selectedItem.name : ''}>
                <FormGrid columns={fielddata} bind:item="{selectedItem}" />
            </Modal>
        </div> 
    </div>
</div>