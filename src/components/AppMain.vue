<script>
import BuildDream from './mainComponents/BuildDream.vue';
import ConstructCareer from './mainComponents/ConstructCareer.vue';
import SuccessData from './mainComponents/SuccessData.vue';
import AppCourses from './mainComponents/AppCourses.vue';
import AppRegister from './mainComponents/AppRegister.vue';
import UpcomingEvents from './mainComponents/UpcomingEvents.vue';
import AppReviews from './mainComponents/AppReviews.vue';
import GetStarted from './mainComponents/GetStarted.vue';

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