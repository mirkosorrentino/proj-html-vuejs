<script>
export default {
    name: "AppRegister",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_register container">
        Register 1
    </div>
    <div class="ms_register container">
        Register 2
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_register {
    // debug
    height: 200px;
    background-color: blue;
    margin-top: 20px;
}
</style>