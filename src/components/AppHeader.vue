<script>
import AppJumbotron from "./headerComponents/AppJumbotron.vue";
import HeaderNavBar from "./headerComponents/HeaderNavBar.vue";

import { store } from "../store"

export default {
    name: "AppHeader",
    components: {
        AppJumbotron,
        HeaderNavBar
    },

    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header class="p-2">
        <div class="ms_container">
            <div class="ms_nav-bar d-flex align-items-center justify-content-between">
                <div class="ms_logo">
                    <img src="../assets/images/dark-logo.png" alt="">
                </div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <HeaderNavBar :navList ="navList" v-for="navList in store.navList"/>
                    </ul>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="addon-wrapping">
                        <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>   
                </nav>
            </div>
        </div>
    </header>
    <AppJumbotron/>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

header {
    color: $blue-text;
    width: 100%;
    background-color: $header-color;
    position: fixed;
    z-index: 999;

    .ms_logo img {
        width: 50%;
    }

    li {
        padding-left: 1.2rem;
    }
}

.navbar {
    padding: 0;
}

input {
    border: 0;
}

span {
    border: 0;
    color: $green-btns;
}

i {
    padding: 0 .7rem;
}
</style>