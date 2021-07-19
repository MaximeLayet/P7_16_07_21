<template>
    <h1>
        Bienvenue sur Groupomania
    </h1>
    <Disconnect/>
</template>

<script>
import Disconnect from '@/components/Disconnect.vue'

export default {
    name: "Header",
    components:{
        Disconnect
    }
}
</script>