//Header avec affichage ou non ddes boutons "Login", "Dsiconnect" et "signup" selon la page où l'on
est
<template>
	<div>
		<h1>
			Bienvenue sur Groupomania
		</h1>
		<Login v-show="homePage" />
		<Disconnect v-show="inApp" />
		<Signup v-show="homePage" />
	</div>
</template>

<script>
import Disconnect from "@/components/Disconnect.vue";
import Login from "@/components/Login.vue";
import Signup from "../views/Login.vue";

export default {
	name: "Header",
	components: {
		Disconnect,
		Login,
		Signup
	},
	computed: {
		inApp() {
			if (this.$route.path === "/") {
				return false;
			} else {
				return true;
			}
		},
		homePage() {
			if (this.$route.path === "/") {
				return true;
			} else {
				return false;
			}
		}
	}
};
</script>
