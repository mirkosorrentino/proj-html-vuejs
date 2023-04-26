<script>
export default {
    name: "AppCourses",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_courses container">
        Courses
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_courses {
    // debug
    height: 200px;
    background-color: greenyellow;
    margin-top: 20px;
}
</style>