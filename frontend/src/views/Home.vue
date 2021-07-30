<template>
	<Header />
	<router-link to="Profil">
		<button class="go_to">Profil</button>
	</router-link>
	<Addpost
		@toggle-new-post="toggleNewPost"
		:showNewPost="showPost"
		:title="showNewPost ? 'Fermer' : 'Ajouter un post'"
		:color="showNewPost ? 'Crimson' : 'CornflowerBlue'"
	/>
	<div v-show="showNewPost">
		<Newpost />
	</div>
	<Posts />
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
			publication: [],
			showNewPost: false
		};
	},
	methods: {
		toggleNewPost() {
			this.showNewPost = !this.showNewPost;
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
