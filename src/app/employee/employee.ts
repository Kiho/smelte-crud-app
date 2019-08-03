import AppService from '../../services/appService';

const path = 'employee';
const title = 'Employees';

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
    label: 'Title',
    field: 'title',
    component: 'text',
    required: true,
    row: 2,
    col: 'md-6'
}, {
    label: 'Department',
    field: 'departmentId',
    component: 'select',
    row: 3,
    col: 'md-6'
}, {
    label: 'Rate',
    field: 'rate',
    component: 'text', // component: 'currency',
    required: true,
    row: 4,
    col: 'md-6'
}];

export const columndata: IColumn[] = fielddata.map(x => Object.assign({}, x));
export const actionColumn: IColumn = {
    label: 'Edit', 
    field: 'field',
    component: 'action',
    class: 'secondary',
};
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

const departmentField = fielddata.find(x => x.field == 'departmentId');
const departmentColumn = columndata.find(x => x.field == 'departmentId');
departmentColumn.component = '';

const employee = {
    async oncreate(instance: IAppPage) {    
        actionColumn.action = (row) => instance.edit(row);
        await this.getDepartmentList(instance);
    },
    
    async getDepartmentList(instance: IAppPage) {
        console.log('getList');
        const depts = await AppService.getList('department');
        instance.$set({ departmentList: depts });
        departmentField.items = depts.map(x => ({ value: x.id, text: x.name }));
        departmentField.items.unshift({ value: 0 , text: ''});
        departmentColumn.field = (data) => {
            const found = depts.find(x => x.id == data.departmentId);
            return found ? found.name : '';
        }
    },
}
export { initialData, employee }