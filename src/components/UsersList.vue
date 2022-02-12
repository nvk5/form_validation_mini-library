<template >
	<div class="card">
		<ul class="list">
			<li v-for="user in users" :key="user.id" class="list__item">
				{{user}}
			</li>
		</ul>
	</div>
</template>
<script>
import useUsers from '../use/users';

export default {
	async setup() {
		const { users } = await useUsers();

		return {
			users,
		};
	},
};
</script>
