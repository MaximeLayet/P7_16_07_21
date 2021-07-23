<template>
	<div v-show="inHomePage">
		<button @click="onClick()">
			Se connecter
		</button>
		<div>
			<Formconnect @show-login="showLogin" />
		</div>
	</div>
</template>

<script>
import Formconnect from "@/components/Formconnect.vue";
export default {
	name: "Login",
	components: {
		Formconnect
	},
	props: {
		showLogin: Boolean
	},
	data() {
		return {
			showTheLogin: false
		};
	},
	methods: {
		onClick() {
			console.log((this.showTheLogin = !this.showTheLogin));
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
	color: #66a7f2;
	background: transparent;
	border: solid 3px #4e77a6;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 0 7px;
	margin: 0.5em;
}
</style>
