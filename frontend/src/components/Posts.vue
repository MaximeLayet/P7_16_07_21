<template>
	<div>
		<div v-bind:key="publication.id" v-for="publication in publications">
			<Post
				@delete-post="$emit('delete-post', post.id)"
				@modify-post="$emit('modify-post', post.id)"
				:post="post"
			/>
		</div>
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "Posts",
	props: {
		posts: Array
	},
	components: {
		Post
	},
	emits: ["delete-post", "modify-post"]
};
</script>
