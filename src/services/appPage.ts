import AppService from './appService';

export default {
    getList(this: IAppPage) {
        AppService.getList(this.path).then(data => {
            this.$set({ list: data  });
        });
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