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

		async newPost(post) {
			const res = await fetch("api/posts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(post)
			});

			const data = await res.json();

			this.posts = [...this.posts, data];
		},

		async deletePost(id) {
			if (confirm("Etes-vous sûr de vouloir supprimer ce post et ses commentaires?")) {
				const res = await fetch(`api/posts/${id}`, {
					method: "DELETE"
				});

				res.status === 200
					? (this.posts = this.posts.filter(post => post.id !== id))
					: alert("erreur de suppression");
			}
		},

		async modifyPost(id) {
			if (confirm("Attention! Etes-vous sûr de vouloir modifier un post deja existant?")) {
				console.log(id);
			}
		},
		async fetchPosts() {
			const res = await fetch("api/posts");

			const data = await res.json();

			return data;
		},
		async fetchPost(id) {
			const res = await fetch(`api/posts/${id}`);

			const data = await res.json();

			return data;
		}
	},

	async created() {
		this.posts = await this.fetchPosts();
	}
};
</script>
