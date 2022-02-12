import { ref } from 'vue';

export default function useFetch(url, options) {
	const response = ref();

	const request = async () => {
		const result = await fetch(url, options);
		response.value = await result.json();
	};

	return {
		response,
		request,
	};
}
