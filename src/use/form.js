import { computed, reactive } from 'vue';
import useField from './field';

export default function (init = {}) {
	const form = reactive({});
	const validKey = 'valid';

	// eslint-disable-next-line no-restricted-syntax
	for (const [key, value] of Object.entries(init)) {
		// console.log(key, value);
		form[key] = useField(value);
	}

	const withoutValid = (v) => v[0] !== validKey;

	form[validKey] = computed(() => Object.entries(form).filter(withoutValid).every((item) => {
		const proxy = item[1];

		return proxy.valid;
	}));

	return form;
}
