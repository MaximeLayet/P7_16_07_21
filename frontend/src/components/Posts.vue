//Component qui permet la mise en place l'affichage de tous les commentaires
<template>
	<div>
		<h1>Qu'est-ce que vos collègues racontent</h1>
		<div>
			<Post />
		</div>
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "Posts",

	components: {
		Post
	}
};
</script>
