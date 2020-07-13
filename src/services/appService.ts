import Requests from '../utils/request';

const MIN_LOADER_SEC = 500;

export default class AppService {

    static setLoading = (app) => {
        const start = Date.now();
        app.$set({ loading: true });
        return () => {
            const elapsed = Date.now() - start;
            if (elapsed < MIN_LOADER_SEC) {
                setTimeout(() => {
                    app.$set({ loading: false });                  
                }, MIN_LOADER_SEC);
            } else {
                app.$set({ loading: false });
            }
        }
    }
    
    static async getListByName(app: IAppPage, path: string) {
        const unload = AppService.setLoading(app);
        try {
            const data = await AppService.getList(path);
            unload();
            return data;
        } catch (error) {
            console.error('getListByName:', error);
        }   
        return null;     
    }

    static async getList(path: string): Promise<any[]> {
        return Requests.get(`api/${path}`) as Promise<any[]>;
    }

    static async save(path: string, item): Promise<any> {
        if (item.id) {
            return Requests.put(`api/${path}`, item);
        } else {
            return Requests.post(`api/${path}`, item);
        }        
    }
    
    static async remove(path: string, id) {
        return Requests.delete(`api/${path}/${id}`);
    }
}