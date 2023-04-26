<script>
export default {
    name: "AppJumbotron",
    data(){
        return{
            
        }
    }
}
</script>

<template>
    <div class="ms_jumbotron">
        <div class="container">
            Jumbotron
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

.ms_jumbotron {
    width: 100%;
    
    // debug
    background-color: lightcoral;
    height: 300px;
}
</style>