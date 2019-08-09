import AppService from './appService';
import { confirm } from '../globals';

export default {
    async getListByName(this: IAppPage, path: string) {
        return AppService.getListByName(this, path);
    },

    async getList(this: IAppPage) {
        const data = await this.getListByName(this.path);
        this.$set({ list: data });  
    },

    add(this: IAppPage, evt?) {
        evt && evt.preventDefault();
        this.$set({ showModal: true, selectedItem: {} });
    },

    edit(this: IAppPage, item, evt?) {
        evt && evt.preventDefault();
        this.$set({ showModal: true, selectedItem: Object.assign({}, item) });
    },

    async save(this: IAppPage, item, evt?) {
        evt && evt.preventDefault();
        const refForm = this.form.querySelector('form');
        if (!validateForm(refForm)) {
            return;
        }        
        await AppService.save(this.path, item);
        this.close();
        this.getList();
    },

    async remove(this: IAppPage, item, evt?) {
        evt && evt.preventDefault();
        if (!item || !item.id) {
            return;
        }
        const r = await confirm('Are you sure to delete this record?');
        if (r) {
            await AppService.remove(this.path, item);
            this.getList();
        }
    },

    close(this: IAppPage) {
        this.$set({ showModal: false, selectedItem: null });
    },
}

function validateForm(form) {
    // check validity of all inputs
    const isValid = form.checkValidity();
    if (!isValid) {
        for (let i = 0; i < form.length; i++) {
            const input = form[i];
            if (input.checkValidity) {
                if (!input.checkValidity()) {
                    console.log(input.validationMessage);                        
                }
                if (input.setError) {
                    input.setError(input.validationMessage, true);
                }
            }
        }
    }
    return isValid;
}