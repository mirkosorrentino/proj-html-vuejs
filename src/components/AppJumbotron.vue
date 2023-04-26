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
            <div class="d-flex">
                <div class="ms_jumbotext">
                    <h2>Complete Your Dreams in JavaS Programming</h2>
                    <p>Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
                <div class="ms_jumboimage">
                    <img src="../assets/images/home-5-hero-image.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

.ms_jumbotron {
    width: 100%;
    background-color: $header-color;

    img {
        width: 70%;
    }
}
</style>