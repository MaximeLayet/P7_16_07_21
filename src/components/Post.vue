<template>
    <div>
        <h3>{{  post.title }}</h3>
        <p>{{ post.text }}</p>
        <!-- boutons à autoriser uniquement pour le client du compte -->
        <button class="modify">Modifier post</button>
        <button class="delete" @click="$emit('delete-post', post.id)" >Supprimer post</button>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: {
        post: Object
    }
}
</script>

<style scoped>
div {
    border: 1px solid #000;
    margin-block: 2em;
}

h3 {
    display: flex;
    margin-left:2em;
}

button{
    margin:0.5em;
    border: none;
    color:#fff;
    padding: 0.5em;
    border-radius:2em;
}
 
 .delete{
     background: linear-gradient(#eb4839, #f21905 )
 }

 .modify{
     background: linear-gradient(#66a7f2, #4e77a6)
 }

</style>