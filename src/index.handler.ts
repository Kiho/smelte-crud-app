import { allWithMapAsync } from "./utils/async";
import { fixPathName } from './config';

export default class IndexHandler {
    static notify: (data: string) => void;

    component

    constructor(private ctor, private target, private module?) {
        this.beforeenter = this.beforeenter.bind(this);
    }

    protected async importModules() {
        const modules: any = {
            template: await import('./app/app/page.svelte'),
            data: await this.module(),
        }
        return allWithMapAsync(modules);
    }

    protected async beforeenter(current, previous) {
        if (this.ctor) {
            console.log(typeof this.ctor);
            let ctor = this.ctor;
            if (ctor.then) {             
                ctor = (await this.ctor).default;
            } 
            this.component = new ctor({
                target: this.target,
            });         
        } else {
            current.data = await this.importModules();                    
        }
    }

    get route() {
        return {
            beforeenter: this.beforeenter,
            enter: (current, previous) => {
                if (current.data) {
                    const options: any = { target: this.target };
                    let props;
                    if (current.data.data) {
                        const pathName = fixPathName(current.pathname);
                        props = Object.assign({}, current.data.data.initialData, { 
                            partial: current.data.data[pathName],
                            instance: null,                          
                        });
                        options.props = props;
                    }
                    this.component = new current.data.template.default(options);
                    if (props) {
                        this.component.$set({ instance: this.component });
                    }
                    console.log('Async Entered!', current);                    
                    IndexHandler.notify(current);
                } else {
                    console.log('Entered!', current);
                    IndexHandler.notify(current);
                }
            },
            leave: (current, previous) => {
                current.data = null;
                this.component.$destroy();
                console.log('Left!', current);     
            }
        }
    }
}