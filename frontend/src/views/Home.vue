<template>
	<Header />
	<router-link to="Profil">
		<button class="go_to">Profil</button>
	</router-link>
	<Addpost
		@toggle-new-post="toggleNewPost"
		:showNewPost="showPost"
		:state="showNewPost ? 'Fermer' : 'Ajouter un post'"
		:color="showNewPost ? 'Crimson' : 'CornflowerBlue'"
	/>
	<div v-show="showNewPost">
		<Newpost @new-publication="newPublication" />
	</div>
	<Posts :publications="publications" />
	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Addpost from "@/components/Addpost.vue";
import Posts from "@/components/Posts.vue";
import Newpost from "@/components/Newpost.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Header,
		Addpost,
		Posts,
		Newpost,
		Footer
	},
	props: {
		showPost: Boolean
	},
	data() {
		return {
			publications: [],
			showNewPost: false
		};
	},
	methods: {
		toggleNewPost() {
			this.showNewPost = !this.showNewPost;
		},
		async newPublication(publication) {
			const res = await fetch("http://localhost:5000/api/publication/", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(publication)
			});

			const data = await res.json();
			this.publications = [...this.publications, data];
			alert("publication crée");
			window.location.reload();
		}
	}
};
</script>

<style>
button {
	color: #66a7f2;
	background: transparent;
	border: solid 3px #4e77a6;
}
</style>
