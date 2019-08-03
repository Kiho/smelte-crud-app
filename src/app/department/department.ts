const path = 'department';
const title = 'Departments';

export const fielddata: IField[] = [
{
    label: 'ID', 
    field: 'id',
    component: 'text',
    readonly: true,
    row: 0,
    col: 'md-6'
}, {
    label: 'Name',
    field: 'name',
    component: 'text',
    required: true,
    row: 1,
    col: 'md-6'
}, {
    label: 'Group Name',
    field: 'groupName',
    component: 'text',
    row: 2,
    col: 'md-6'
}];

export const columndata: IColumn[] = fielddata.map(x => Object.assign({}, x));
export const actionColumn: IColumn = {
    label: 'Edit', 
    field: 'field',
    component: 'action',
    class: 'secondary',
    sortable: false,
} 
columndata.push(actionColumn);

const initialData = {
    list: [],
    showModal: false,
    selectedItem: null,
    path,
    title,
    fielddata,
    columndata,
};

const department = {
    async oncreate (instance: IAppPage) {    
        actionColumn.action = (row) => instance.edit(row);          
    },
}

export { initialData, department }