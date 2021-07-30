<template>
	<div>
		<h1>Qu'est-ce que vos collègues racontent</h1>
		<div v-bind:key="publication" v-for="publication in publications">
			<Post />
		</div>
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "Posts",
	data() {
		return {
			posts: []
		};
	},
	components: {
		Post
	},
	emits: ["delete-post", "modify-post"]
};
</script>
