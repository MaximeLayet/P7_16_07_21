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
				<div v-show="showNewComment">
					<Newcomment @new-comment="newComment" />
				</div>
			</div>
			<Commentbutton
				@toggle-new-comment="toggleNewComment"
				:showNewComment="showCommentForm"
				:state="showNewComment ? 'Fermer' : 'Commenter'"
				:color="showNewComment ? 'Crimson' : 'CornflowerBlue'"
			/>
		</div>
		<Comments :comments="comments" />
		<Footer />
	</div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Commentbutton from "../components/Commentbutton.vue";
import Newcomment from "../components/Newcomment.vue";
import Comments from "../components/Comments.vue";
export default {
	components: {
		Footer,
		Header,
		Commentbutton,
		Newcomment,
		Comments
	},
	props: {
		showCommentForm: Boolean
	},
	data() {
		return {
			showNewComment: false,
			publications: [],
			comment: [],
			title: "",
			text: "",
			content: ""
		};
	},
	mounted() {
		this.getThePublication();
	},
	methods: {
		toggleNewComment() {
			this.showNewComment = !this.showNewComment;
		},
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
		},
		async newComment(comment) {
			const res = await fetch("http://localhost:5000/api/comment/create", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(comment)
			});

			const data = await res.json();
			this.comments = [this.comments, data];
			alert("commentaire posté");
			window.location.reload;
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
