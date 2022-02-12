import { reactive, ref, watch } from 'vue';

export default function useField(field) {
	const valid = ref(true);
	const value = ref(field.value);
	const errors = reactive({});
	const touched = ref(false);
	// console.log(field);

	const reassign = (val) => {
		valid.value = true;
		// eslint-disable-next-line array-callback-return
		Object.keys(field.validators ?? {}).map((name) => {
			const isValid = field.validators[name](val);
			// console.log('isValid: ', isValid);
			errors[name] = !isValid;

			if (!isValid) {
				valid.value = false;
			}
		});
	};

	const blur = () => { touched.value = true; };

	watch(value, reassign);
	reassign(value.value);

	return {
		valid,
		value,
		errors,
		touched,
		blur,
	};
}
