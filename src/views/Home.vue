<template>
  <Header/>
  <Addpost @toggle-new-post="$emit('toggle-new-post')"/>
  <div v-show="showNewPost">
  <Newpost @new-post="newPost" />
  </div>
  <Posts @delete-post="deletePost" :posts="posts" />
</template>

<script>
import Header from '@/components/Header.vue'
import Addpost from '@/components/Addpost.vue'
import Posts from '@/components/Posts.vue'
import Newpost from '@/components/Newpost.vue'

export default {
  components: {
    Header,
    Addpost,
    Posts, 
    Newpost,
  },
  data(){
    return {
      posts: [],
      showNewPost: false,
    }
  },
  methods: {
    toggleNewPost(){
      this.showNewPost = !this.showNewPost
    },

    newPost(post) {
        this.posts = [...this.posts, post]
    },

      deletePost(id) {
       if (confirm('Etes-vous sûr de vouloir supprimer ce post et ses commentaires?')) {
          this.posts = this.posts.filter(post => post.id !== id);
       }
      }
  },

  
    created(){
      this.posts = [
        {
          id: 1,
          title: " Premier titre",
          text: "Premier post"
        },
          {
          id: 2,
          title: "Deuxieme titre",
          text: "Deuxieme post"
        },
          {
          id: 3,
          title: "Troisieme titre",
          text: "Troisieme post"
        }
      ]
    }
}
</script>