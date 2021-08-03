<template>
	<div>
		<div class="pub" :key="publication.id" v-for="publication in publications">
			<router-link class="go-to" :to="`/onePost/${publication.pubId}`">
				<h2>{{ publication.title }}</h2>
				<p>{{ publication.text }}</p>
				<p>{{ publication.userId }}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Post",

	data() {
		return {
			publications: []
		};
	},
	mounted() {
		this.showAllPublications();
	},
	methods: {
		showAllPublications() {
			const token = localStorage.getItem("token");
			axios
				.get("http://localhost:5000/api/publication/", {
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
				.then(res => {
					this.publications.push(...res.data);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};
</script>

<style scoped>
.go-to {
	pointer: cursor;
	text-decoration: none;
}

div.pub {
	border: 1px solid #000;
	margin-block: 2em;
}

h3 {
	display: flex;
	margin-left: 2em;
}
</style>
