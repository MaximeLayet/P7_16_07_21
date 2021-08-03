<template>
	<div>
		<div>
			<h1>Exprimez-vous!</h1>
		</div>
		<form @submit.prevent="onSubmit">
			<div class="new-post">
				<label>Titre</label>
				<input
					class="title"
					type="text"
					v-model="title"
					name="title"
					placeholder="Ajouter un titre"
					required
				/>
			</div>
			<div class="new-post">
				<label>Votre post</label>
				<textarea v-model="text" name="text" placeholder="Votre article ici..." required />
			</div>

			<input class="submit" type="submit" value="Publier" />
		</form>
	</div>
</template>

<script>
export default {
	name: "Newpost",
	data() {
		return {
			title: "",
			text: "",
			userId: localStorage.getItem("userId")
		};
	},
	methods: {
		onSubmit() {
			const addPublication = {
				title: this.title,
				text: this.text,
				userId: this.userId
			};

			this.$emit("new-publication", addPublication);
			(this.title = ""), (this.text = ""), (this.userId = localStorage.getItem("userId"));
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
input.title {
	width: 30vh;
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
}

div {
	display: flex;
	flex-direction: column;
}
</style>
