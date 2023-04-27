<script>
export default {
    name: "SuccessData",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_success-data ms_container">
        Success Data
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_success-data {
    // debug
    height: 200px;
    background-color: lightslategrey;
    margin-top: 20px;
}
</style>