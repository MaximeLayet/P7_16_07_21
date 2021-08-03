//Component qui reçoit le compo Comment et donc met en place l'affichage des commentaires
<template>
	<div>
		<h4>Réactions</h4>
		<div>
			<Comment />
		</div>
	</div>
</template>

<script>
import Comment from "@/components/Comment.vue";

export default {
	name: "Comments",

	components: {
		Comment
	}
};
</script>
