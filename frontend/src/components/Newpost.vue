<template>
	<form @submit="onSubmit">
		<div>
			<label>Titre</label>
			<input
				type="text"
				v-model="title"
				name="title"
				placeholder="Ajouter un titre"
				required
			/>
		</div>
		<div>
			<label>Votre post</label>
			<textarea v-model="text" name="text" placeholder="Votre article ici..." required />
		</div>

		<input class="submit" type="submit" value="Publier" />
	</form>
</template>

<script>
export default {
	name: "Newpost",
	data() {
		return {
			title: "",
			text: ""
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();

			const newPost = {
				id: Math.floor(Math.random() * 10000),
				title: this.title,
				text: this.text
			};

			this.$emit("new-post", newPost);

			this.title = "";
			this.text = "";
		}
	}
};
</script>

<style>
label {
	text-transform: uppercase;
	margin: 0.5em;
	font-weight: bold;
}

input {
	border-radius: 0 0 0 7px;
	margin: 1em;
}

input.submit {
	font-size: 1.5em;
	background: transparent;
	margin: 1em;
	color: #4e77a6;
	border: 3px solid #4e77a6;
}
</style>
