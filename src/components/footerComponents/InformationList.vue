<script>
export default {
    name: "InformationList",
    props: {
        informationList: Object
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
            {{ informationList.nameList }}
        </a>
    </li>                 
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

</style>