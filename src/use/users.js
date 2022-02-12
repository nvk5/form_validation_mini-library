import { ref } from 'vue';
import useFetch from './fetch';

export default async function useUsers() {
	const loaded = ref(false);

	const { response: users, request } = useFetch('https://jsonplaceholder.typicode.com/users?_limit=10');

	if (!loaded.value) {
		await request();

		loaded.value = true;
	}

	return {
		users,
	};
}
