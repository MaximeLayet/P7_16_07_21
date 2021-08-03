//Compo qui permet d'afficher ou non le formulaire d'inscription
<template>
	<div v-show="inHomePage">
		<div>
			<button @click="toggleSignup">Créer un compte</button>
		</div>
		<div v-show="showConnect">
			<Formsignup />
		</div>
	</div>
</template>

<script>
import Formsignup from "@/components/Formsignup.vue";

export default {
	name: "Signup",
	components: {
		Formsignup
	},
	data() {
		return {
			showConnect: false
		};
	},
	methods: {
		toggleSignup() {
			this.showConnect = !this.showConnect;
		}
	},
	computed: {
		inHomePage() {
			if (this.$route.path === "/") {
				return true;
			} else {
				return false;
			}
		}
	}
};
</script>

<style scoped>
button {
	color: #fff;
	background: #66a7f2;
	border: solid 3px #4e77a6;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 7px 0;
	margin: 0.5em;
}
</style>
