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
    <header class="p-2">
        <div class="container">
            <div class="ms_nav-bar d-flex align-items-center justify-content-between">
                <div class="ms_logo">
                    <img src="../assets/images/dark-logo.png" alt="">
                </div>
                
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- home -->
                        <li class="nav-item">
                            <a class="dropdown-toggle" href="#">
                                Home
                            </a>
                        </li> 
                        <!-- pages -->
                        <li class="nav-item">
                            <a class="dropdown-toggle" href="#">
                                Pages
                            </a>
                        </li> 
                        <!-- courses -->
                        <li class="nav-item">
                            <a class="dropdown-toggle" href="#">
                                Courses
                            </a>
                        </li> 
                        <!-- features -->
                        <li class="nav-item">
                            <a class="dropdown-toggle" href="#">
                                Features
                            </a>
                        </li> 
                        <!-- blog -->
                        <li class="nav-item">
                            <a class="dropdown-toggle" href="#">
                                Blog
                            </a>
                        </li> 
                        <!-- shop -->
                        <li class="nav-item">
                            <a class="dropdown-toggle" href="#">
                                Shop
                            </a>
                        </li> 
                    </ul> 
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="addon-wrapping">
                        <span class="input-group-text" id="addon-wrapping">@</span>
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
</style>