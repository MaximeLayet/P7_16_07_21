<template>
	<div>
		<button :style="{ background: color }" @click="onClick()">{{ state }}</button>
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
		state: String,
		color: String
	}
};
</script>

<style scoped>
button {
	color: #fff;
	background: transparent;
	border: solid 3px #000;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 0 7px;
	margin: 0.5em;
}
</style>
