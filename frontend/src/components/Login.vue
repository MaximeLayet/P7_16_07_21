<template>
	<button>Se connecter</button>
	<div>
		<Formconnect />
	</div>
</template>

<script>
import Formconnect from "@/components/Formconnect.vue";
export default {
	name: "Login",
	components: {
		Formconnect
	}
};
</script>

<style scoped>
button {
	color: #66a7f2;
	background: transparent;
	border: solid 3px #4e77a6;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 0 7px;
	margin: 0.5em;
}
</style>
