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
        <div class="ms_container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="ms_jumbotext col-5">
                    <h2>Complete Your Dreams in JavaS Programming</h2>
                    <p>Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
                    <button type="button" class="btn ms_btn">Download free E-book</button>
                </div>
                <div class="ms_jumboimage col-7">
                    <img src="../../assets/images/home-5-hero-image.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_jumbotron {
    width: 100%;
    padding: 3rem 0;
    background-color: $header-color;

    img {
        width: 80%;
        padding-left: 5rem;
    }
}
</style>