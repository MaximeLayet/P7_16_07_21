//Component qui va permettre d'afficher tous les commentaires d'une publication
<template>
	<div>
		<div class="comment" :key="comment.id" v-for="comment in comments">
			<p>{{ comment.content }}</p>
			<button class="delete" @click="deleteComment">
				Supprimer mon commentaire
			</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Comment",

	data() {
		return {
			comments: []
		};
	},
	mounted() {
		this.showAllComments();
	},
	methods: {
		//fonction qui permet l'affichage des commentaires (avec axios)
		showAllComments() {
			const token = localStorage.getItem("token");
			axios
				.get("http://localhost:5000/api/comment/", {
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
				.then(res => {
					this.comments.push(...res.data);
				})
				.catch(error => {
					console.log(error);
				});
		},
		//fonction qui permet la suppression d'un commentaire (avec axios)
		deleteComment() {
			const token = localStorage.getItem("token");
			const userId = localStorage.getItem("userId");
			//const pubId = localStorage.getItem("pubId");
			const commentId = this.$route.params.id;

			axios
				.delete(`http://localhost:5000/api/comment/${commentId}`, {
					data: {
						userId: userId,
						commentId: commentId
					},
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
				.then(res => {
					if (res) {
						this.publication.Comments.splice(1);
						alert("Commentaire supprimé");
						window.location.reload();
					}
				});
		}
	}
};
</script>

<style scoped>
div.comment {
	border: 1px solid #000;
	margin-block: 2em;
}
</style>
