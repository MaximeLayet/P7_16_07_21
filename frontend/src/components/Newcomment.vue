<template>
	<div>
		<form @submit.prevent="onSubmit">
			<div class="new-post">
				<label>Votre commentaire</label>
				<textarea class="comment" type="text" v-model="content" name="content" required />
			</div>

			<input class="submit" type="submit" value="Valider" />
		</form>
	</div>
</template>

<script>
export default {
	name: "Newcomment",
	data() {
		return {
			content: ""
		};
	},
	methods: {
		onSubmit() {
			const addComment = {
				content: this.content
			};
			console.log(addComment);

			this.$emit("new-comment", addComment);
			this.content = "";
		}
	}
};
</script>

<style scoped>
label {
	text-transform: uppercase;
	margin: 0.5em;
	font-weight: bold;
}

input {
	border-radius: 0 0 0 7px;
	margin-bottom: 1em;
}
input.comment {
	width: 50vh;
	height: 15vh;
	align-self: center;
}

textarea {
	align-self: center;
	width: 70vh;
	height: 30vh;
}

input.submit {
	font-size: 1.5em;
	background: transparent;
	margin: 1em;
	color: #4e77a6;
	border: 3px solid #4e77a6;
	cursor: pointer;
	width: 30vh;
}

div {
	display: flex;
	flex-direction: column;
}
</style>
