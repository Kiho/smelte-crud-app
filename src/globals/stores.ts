import { writable } from 'svelte/store';

const TIMEOUT = 4000;
export const alertStore = writable([]);
export const confirmStore = writable(null);

function alert(message, type = 'info') {
	function close() {
		alertStore.update(alerts => alerts.filter(d => d !== data));
	}
	// TODO
	const data: any = { id: Math.random(), message, type, close };
	alertStore.update(alerts => alerts.concat(data));
	setTimeout(close, TIMEOUT);
}

// e.g. Are you sure you want to delete X?
function confirm(message) {
	return new Promise(resolve => {
		// TODO
		const data: any = { message, resolve };
		confirmStore.set(data);
	}).finally(() => {
		confirmStore.set(null);
	});
}

export { alert, confirm };
