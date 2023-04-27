<script>
import { objectToString } from '@vue/shared';

export default {
    name: "HeaderNavBar",
    props: {
        navList: Object
    },

    data(){
        return{
            
        }
    }
}
</script>

<template>                
    <li class="nav-item">
        <a class="dropdown-toggle" href="#">
            {{ navList.nameList }}
        </a>
    </li>                 
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

</style>