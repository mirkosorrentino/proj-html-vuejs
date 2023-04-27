<script>
export default {
    name: "ExploreList1",
    props: {
        exploreList1: Object
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
            {{ exploreList1.nameList }}
        </a>
    </li>                 
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

</style>