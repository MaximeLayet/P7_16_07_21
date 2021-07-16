<template>
<div>
    <button @click="onClick()">Publier</button>
</div>
</template>

<script>
export default {
    name: "Addpost",
    methods:{
        onClick(){
            this.$emit("toggle-new-post", )
        }
    }
}
</script>


<style scoped>
button {
    border-radius: 2em;
    border: none;
    cursor: pointer;
    margin: 2em;
    padding: 2em;
}
</style>
