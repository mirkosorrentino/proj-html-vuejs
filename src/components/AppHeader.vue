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
    <header>
        <div class="container">
            Header
        </div>
    </header>
    <AppJumbotron/>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

header {
    width: 100%;
    
    // debug
    height: 50px;
    background-color: aqua;
}
</style>