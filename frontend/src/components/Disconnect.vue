//Component qui permet la deconnection de l'appli
<template>
	<router-link to="/">
		<button @click="logout">Se déconnecter</button>
	</router-link>
</template>

<script>
export default {
	name: "Disconnect",
	methods: {
		logout() {
			localStorage.clear();
		}
	}
};
</script>

<style scoped>
button {
	color: #f21905;
	background: transparent;
	border: solid 3px #f21905;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 7px 7px;
	margin: 0.5em;
}
</style>
