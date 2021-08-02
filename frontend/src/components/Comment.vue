<template>
	<div>
		<div class="comment" :key="comment.id" v-for="comment in comments">
			<p>{{ comment.content }}</p>
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
