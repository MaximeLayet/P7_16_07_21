//Footer avec une fonction qui permet d'afficher l'année de maniere dynamique
<template>
	<footer>&copy; {{ copyrightYear }}</footer>
</template>

<script>
export default {
	name: "Footer",
	data() {
		const copyrightYear = new Date().getFullYear();
		return {
			copyrightYear
		};
	}
};
</script>

<style>
footer {
	color: #fff;
	background: linear-gradient(#66a7f2, #4e77a6);
	padding-block: 2em;
}
</style>
