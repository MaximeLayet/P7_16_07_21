<template>
	<div>
		<h2>Prénom et nom de l'auteur</h2>
		<h3>{{ publication.title }}</h3>
		<p>{{ publication.text }}</p>
		<p>humeur de {{ firstName }}{{ lastName }}</p>
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
				.get(" http://localhost:5000/api/publication/")
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
