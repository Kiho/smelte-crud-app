/*
 * This is the entrypoint of all the JavaScript files.
 */
import "smelte/src/tailwind.css";

import App from './app/app/app.svelte';
import * as config from './config';

config.init();

const app = new App({
    // @ts-ignore
    target: document.querySelector('#app-root'),
});
