<script>
export default {
    name: "AppFooter",
    data(){
        return{
            
        }
    }
}
</script>

<template>
    <footer></footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

footer {
    width: 100%;
    
    // debug
    height: 300px;
    background-color: violet;
}
</style>