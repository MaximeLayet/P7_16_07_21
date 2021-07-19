<template>
<form @submit="onSubmit">
    <div>
        <label>Titre</label>
        <input  type="text" v-model="title" name="title" placeholder="Ajouter un titre" required/>
    </div>
    <div>
        <label>Votre post</label>
        <textarea v-model="text" name="text" placeholder="Votre article ici..." required/>
    </div>

    <input type="submit" value="publier"/>
</form>
</template>

<script>
export default {
    name: 'Newpost',
    data(){
        return {
            title: '',
            text: '',
        }
    }, 
    methods : {
        onSubmit(e) {
            e.preventDefault()  


            const newPost = {
                id: Math.floor(Math.random() * 10000),
                title: this.title,
                text: this.text
            }

            this.$emit("new-post", newPost)

            this.title = ""
            this.text = ""
        }
    }
}
</script>