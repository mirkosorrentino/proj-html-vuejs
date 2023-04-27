<script>
export default {
    name: "ExploreList2",
    props: {
        exploreList2: Object
    },

    data(){
        return{
            
        }
    }
}
</script>

<template>                
    <li class="ms_footer-list-item">
        <a href="#">
            {{ exploreList2.nameList }}
        </a>
    </li>                 
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

</style>