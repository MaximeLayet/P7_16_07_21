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
