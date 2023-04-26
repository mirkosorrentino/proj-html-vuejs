<script>
import AppJumbotron from "./AppJumbotron.vue"

export default {
    name: "AppHeader",
    components: {
        AppJumbotron
    },

    data(){
        return{

        }
    }
}
</script>

<template>
    <header></header>
    <AppJumbotron/>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;
</style>