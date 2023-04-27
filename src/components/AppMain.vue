<script>
import BuildDream from './main/BuildDream.vue';
import ConstructCareer from './main/ConstructCareer.vue';
import SuccessData from './main/SuccessData.vue';
import AppCourses from './main/AppCourses.vue';
import AppRegister from './main/AppRegister.vue';
import UpcomingEvents from './main/UpcomingEvents.vue';
import AppReviews from './main/AppReviews.vue';
import GetStarted from './main/GetStarted.vue';

export default {
    name: "AppMain",
    components: {
        BuildDream,
        ConstructCareer,
        SuccessData,
        AppCourses,
        AppRegister,
        UpcomingEvents,
        AppReviews,
        GetStarted
    },

    data(){
        return{
            
        }
    }
}
</script>

<template>
    <main>
        <BuildDream/>
        <ConstructCareer/>
        <SuccessData/>
        <AppCourses/>
        <AppRegister/>
        <UpcomingEvents/>
        <AppReviews/>
        <GetStarted/>
    </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

main {
    width: 100%;

    // debug
    // background-color: lightgreen;
    padding: 20px 0;
}
</style>