import roadtrip from 'roadtrip';
import IndexHandler from './index.handler';
import Home from './app/home/home.svelte';
import FormGrid from './formgrid/App.svelte';
import { basePath } from './config';

export default class Routes {
    router;

    indexHandler: IndexHandler;
    employeeHandler: IndexHandler;
    departmentHandler: IndexHandler;
    aboutHandler: IndexHandler;
    formgridHandler: IndexHandler;

    constructor(target: Element) {
        this.router = roadtrip;
        this.init(target);
    }

    init(target) {
        this.indexHandler = new IndexHandler(Home, target);
        this.aboutHandler = new IndexHandler(import(`./app/about/About.svelte`), target);
        this.employeeHandler = new IndexHandler(null, target, () => import('./app/employee/employee'));
        this.departmentHandler = new IndexHandler(null, target, () => import('./app/department/department'));
        this.formgridHandler = new IndexHandler(FormGrid, target);

        this.router
            .add(basePath + '/', this.indexHandler.route)
            .add(basePath + '/formgrid', this.formgridHandler.route)
            .add(basePath + '/about', this.aboutHandler.route)
            .add(basePath + '/employee', this.employeeHandler.route)
            .add(basePath + '/department', this.departmentHandler.route)
            .start({
                fallback: basePath + '/'
            });
    }
}

export { basePath };