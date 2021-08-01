<template>
	<div>
		<Header />
		<router-link to="/home">
			<button class="back_to">Retour à la page principale</button>
		</router-link>
		<router-link to="Profil">
			<button class="go_to">Profil</button>
		</router-link>
		<div class="pub">
			<div>
				<h2>{{ title }}</h2>
				<p>{{ text }}</p>
			</div>
			<Commentbutton />
		</div>
		<Footer />
	</div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Commentbutton from "../components/Commentbutton.vue";
export default {
	components: {
		Footer,
		Header,
		Commentbutton
	},
	data() {
		return {
			publications: [],
			title: "",
			text: ""
		};
	},
	mounted() {
		this.getThePublication();
	},
	methods: {
		getThePublication() {
			const token = localStorage.getItem("token");
			const pubId = this.$route.params.id;
			console.log(pubId);
			axios
				.get(`http://localhost:5000/api/publication/${pubId}`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
				.then(res => {
					this.publications = res.data;
					this.title = this.publications.title;
					this.text = this.publications.text;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};
</script>

<style scoped>
div.pub {
	border: 1px solid #000;
	margin-block: 2em;
}
</style>
