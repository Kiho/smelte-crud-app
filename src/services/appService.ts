import Requests from '../utils/request';

export default class AppService {

    static async getList(path: string): Promise<any[]> {
        return Requests.get(`api/${path}`) as Promise<any[]>;
    }

    static async save(path: string, item, fnSave): Promise<{}> {
        if (item.id) {
            return Requests.put(`api/${path}`, item).then(fnSave);
        } else {
            return Requests.post(`api/${path}`, item).then(fnSave);
        }        
    }
    
    static async remove(path: string, id) {
        return Requests.delete(`api/${path}/${id}`);
    }
}