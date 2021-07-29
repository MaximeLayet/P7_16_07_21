<template>
	<div>
		<Header />
		<router-link to="/home">
			<button class="back_to">Retour à la page principale</button>
		</router-link>
		<div>
			<h1>
				Hey! <br />
				Coucou {{ firstName }} {{ lastName }}!
			</h1>
		</div>
		<div>
			<button class="delete" @click="deleteAccount">Supprimer mon compte</button>
		</div>
		<Footer />
	</div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Profil",
	components: {
		Header,
		Footer
	},
	data() {
		return {
			token: "",
			UserId: "",
			firstName: "",
			lastName: ""
		};
	},
	mounted() {
		this.firstName = localStorage.getItem("firstName");
		this.lastName = localStorage.getItem("lastName");
	},
	methods: {
		deleteAccount() {
			const token = localStorage.getItem("token");
			const id = localStorage.getItem("userId");

			axios
				.delete("http://localhost:5000/api/auth/" + id, {
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
				.then(response => {
					if (response) {
						localStorage.clear();
						this.$router.push("/");
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};
</script>

<style>
button {
	color: #fff;
	background: #66a7f2;
	border: solid 3px #4e77a6;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 7px 0;
	margin: 0.5em;
}

.back_to {
	color: #66a7f2;
	background: transparent;
	border: solid 3px #4e77a6;
}

.delete {
	background: #f21905;
	border: solid 3px #000;
	color: #fff;
}
</style>
