import AppService from './appService';

const MIN_LOADER_SEC = 500;

export default {
    async getList(this: IAppPage) {
        const start = Date.now();
        this.$set({ loading: true });
        try {
            const data = await AppService.getList(this.path);
            this.$set({ list: data });
        } catch (error) {
            console.error('getList:', error);
        }
        const elapsed = Date.now() - start;
        if (elapsed < MIN_LOADER_SEC) {
            setTimeout(() => this.$set({ loading: false }), 500);
        } else {
            this.$set({ loading: false });
        }        
    },

    add(this: IAppPage, evt?) {
        evt && evt.preventDefault();
        this.$set({ showModal: true, selectedItem: {} });
    },

    edit(this: IAppPage, item, evt?) {
        evt && evt.preventDefault();
        this.$set({ showModal: true, selectedItem: Object.assign({}, item) });
    },

    save(this: IAppPage, item, evt?) {
        evt && evt.preventDefault();
        const self = this;
        const refForm = this.form.querySelector('form');
        if (!validateForm(refForm)) {
            return;
        }
        const fnSave = (data) => {
            self.close();
            self.getList();
        }
        AppService.save(this.path, item, fnSave);
    },

    async remove(this: IAppPage, item, evt?) {
        evt && evt.preventDefault();
        if (!item || !item.id) {
            return;
        }
        await AppService.remove(this.path, item);
        this.getList();
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
                    input.setError(input.validationMessage);
                }
            }
        }
    }
    return isValid;
}