<template>
    <div>
        <div v-bind:key="post.id" v-for="post in posts">
        <Post @delete-post="$emit('delete-post', post.id)" :post="post" />
    </div>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
    name: "Posts",
    props: {
        posts: Array
    },
    components:{
        Post
    },
    emits: ["delete-post"]
}
</script>