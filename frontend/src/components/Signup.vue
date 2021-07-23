<template>
	<div v-show="inHomePage">
		<button>Créer un compte</button>
		<div>
			<Formsignup @show-connect="showConnect" />
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
	props: {
		showConnect: Boolean
	},
	data() {
		return {
			showTheConnect: false
		};
	},
	methods: {
		onClick() {
			console.log((this.showTheConnect = !this.showTheConnect));
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
