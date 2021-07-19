<template>
	<Header />
	<Addpost
		@toggle-new-post="toggleNewPost"
		:showNewPost="showPost"
		:title="showNewPost ? 'Fermer' : 'Ajouter un post'"
		:color="showNewPost ? 'Crimson' : 'CornflowerBlue'"
	/>
	<div v-show="showNewPost">
		<Newpost @new-post="newPost" />
	</div>
	<Posts @delete-post="deletePost" @modify-post="modifyPost" :posts="posts" />
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
			posts: [],
			showNewPost: false
		};
	},
	methods: {
		toggleNewPost() {
			this.showNewPost = !this.showNewPost;
		},

		newPost(post) {
			this.posts = [...this.posts, post];
		},

		deletePost(id) {
			if (confirm("Etes-vous sûr de vouloir supprimer ce post et ses commentaires?")) {
				this.posts = this.posts.filter(post => post.id !== id);
			}
		},

		modifyPost(title, text) {
			if (confirm("Attention! Etes-vous sûr de vouloir modifier un post deja existant?")) {
				console.log(title, text);
				this.posts = this.posts.write(post => post.title);
			}
		}
	},

	created() {
		this.posts = [
			{
				id: 1,
				title: " Premier titre",
				text: "Premier post"
			},
			{
				id: 2,
				title: "Deuxieme titre",
				text: "Deuxieme post"
			},
			{
				id: 3,
				title: "Troisieme titre",
				text: "Troisieme post"
			}
		];
	}
};
</script>
