<template>
	<img src="../assets/icon-above-font.png" />
	<Header />
	<div>
		<h1>Un réseau pour nous rassembler</h1>
	</div>
	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "welcome",
	components: {
		Header,
		Footer
	}
};
</script>

<style scoped>
div {
	margin-block: 10vh;
}

img {
	width: 50vh;
}
</style>
