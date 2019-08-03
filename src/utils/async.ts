export function allWithAsync(...listOfPromises) {
    return new Promise(async (resolve, reject) => {
        let results = [];
        for (let promise of listOfPromises.map(Promise.resolve, Promise)) {
            results.push(await promise.then(async resolvedData => await resolvedData, reject))
            if (results.length === listOfPromises.length) resolve(results);
        }
    });
};

export function allWithMapAsync(listOfPromises) {
    return new Promise(async (resolve, reject) => {
        const keys = Object.keys(listOfPromises);
        const values = keys.map(x => listOfPromises[x]);
        let list = [], results = {};
        for (let promise of values.map(Promise.resolve, Promise)) {
            results[keys[list.length]] = await promise.then(async resolvedData => await resolvedData, reject);
            list.push(results[keys[list.length]]);
            if (list.length === keys.length) resolve(results);
        }
    });
};