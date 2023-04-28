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
                    <button type="button" class="btn ms_btn"><i class="fa-solid fa-download"></i> Download free E-book</button>
                </div>
                <div class="ms_jumboimage col-7">
                    <img src="../../assets/images/home-5-hero-image.png" alt="">
                </div>
            </div>
        </div>
        <div class="ms_symbols d-flex flex-column">
            <div class="ms_symbol"><a href=""><i class="fa-solid fa-ruler-combined"></i></a></div>
            <div class="ms_symbol"><a href=""><i class="fa-regular fa-circle"></i></a></div>
            <div class="ms_symbol"><a href=""><i class="fa-solid fa-book"></i></a></div>
            <div class="ms_symbol"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_jumbotron {
    width: 100%;
    padding: 6rem 0 3rem;
    background-color: $header-color;
    position: relative;

    img {
        width: 80%;
        padding-left: 5rem;
    }
}

i {
    padding-right: .5rem;
}

.ms_symbols {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 30%;
    background-color: white;
    padding: 5px;
}
.ms_symbol {
    padding: 3px;
}

</style>