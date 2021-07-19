<template>
	<div>
		<button :style="{ background: color }" @click="onClick()">{{ title }}</button>
	</div>
</template>

<script>
export default {
	name: "Addpost",
	methods: {
		onClick() {
			this.$emit("toggle-new-post");
		}
	},
	props: {
		title: String,
		color: String
	}
};
</script>

<style scoped>
button {
	color: #fff;
	border-radius: 2em;
	border: none;
	cursor: pointer;
	margin: 2em;
	padding: 2em;
}
</style>
