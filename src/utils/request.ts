const apiUrl ='https://safe-springs-35306.herokuapp.com/';
// const apiUrl ='http://localhost:7000/';

class Requests {
    static async makeRequest(url, method, headers, body?) {
        let request: RequestInit = {
            mode: 'cors',
            method,
            headers
        };
        if (body) {
            request.body = JSON.stringify(body);
        }

        var res = await fetch(apiUrl + url, request);
        var contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return res.json();
        } else {
            return res.text();
        }
    }
    static makeHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
    static async get(url) {
        return new Promise(async (res, rej) => {
            try {
                const headers = Requests.makeHeaders();
                const json = await Requests.makeRequest(url, 'GET', headers);
                res(json);
            } catch (err) {
                rej(err);
            }
        });
    }
    static async post(url, body) {
        return new Promise(async (res, rej) => {
            try {
                const headers = Requests.makeHeaders();
                const json = await Requests.makeRequest(url, 'POST', headers, body);
                res(json);
            } catch (err) {
                rej(err);
            }
        });
    }
    static async put(url, body) {
        return new Promise(async (res, rej) => {
            try {
                const headers = Requests.makeHeaders();
                const json = await Requests.makeRequest(url, 'PUT', headers, body);
                res(json);
            } catch (err) {
                rej(err);
            }
        });
    }
    static async delete(url) {
        return new Promise(async (res, rej) => {
            try {
                const headers = Requests.makeHeaders();
                const json = await Requests.makeRequest(url, 'DELETE', headers);
                res(json);
            } catch (err) {
                rej(err);
            }
        });
    }
}

export default Requests;