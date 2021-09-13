import { writable } from "svelte/store";

const store = writable({
	q1: {
		check: false,
		text: ""
	},
	q2: {
		check: false,
		text: ""
	}
});

export default store;
