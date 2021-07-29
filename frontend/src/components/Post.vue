<template>
	<div>
		<h2>Prénom et nom de l'auteur</h2>
		<h3>{{ publication.title }}</h3>
		<p>{{ publication.text }}</p>
		<!-- boutons à autoriser uniquement pour le client du compte -->
		<button class="modify" @click="$emit('modify-post', publication.id)">Modifier post</button>
		<button class="comment">Commenter</button>
		<button class="delete" @click="$emit('delete-post', publication.id)">Supprimer post</button>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Post",
	props: {
		post: Object
	},
	methods: {
		showPublication() {
			axios
				.get(" http://localhost:5000/publication/")
				.then(response => console.log(response));
		}
	}
};
</script>

<style scoped>
div {
	border: 1px solid #000;
	margin-block: 2em;
}

h3 {
	display: flex;
	margin-left: 2em;
}

button {
	margin: 0.5em;
	border: none;
	color: #fff;
	padding: 0.5em;
	border-radius: 2em;
	cursor: pointer;
}

.delete {
	background: linear-gradient(#eb4839, #f21905);
}

.modify {
	background: linear-gradient(#66a7f2, #4e77a6);
}
</style>
