let basePath;

function init() {
    basePath = document.getElementsByTagName('base')[0].getAttribute('href')!;
    if (basePath && basePath.length > 0 && basePath[basePath.length - 1] === '/') {
        basePath = basePath.substring(0, basePath.length - 1);
    }
    console.log('basePath: ', basePath);
}

function fixPathName(path: string) {
    if (basePath) {
        return path.substring(basePath.length);
    }
    return path;
}

export { basePath, init, fixPathName };