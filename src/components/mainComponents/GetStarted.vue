<script>
export default {
    name: "GetStarted",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_get-started ms_container text-center">
        <div class="ms_blue-subtitle">Start today for getting <span class="ms_green-title">Online Certification</span></div>
        <h2 class="pb-3">You can be your own guiding star with our help!</h2>
        <button type="button" class="btn ms_btn">Get Started now</button>
        <img src="../../assets/images/maxcoach-shape-01.png" alt="" class="ms_lines">
        <img src="../../assets/images/maxcoach-shape-02.png" alt="" class="ms_quarter-circle">

    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_get-started {
    position: relative;
    padding: 9rem 0;

    .ms_blue-subtitle {
        font-size: 1.2rem;
        font-weight: 600;
        color: $blue-text;
    }
    .ms_lines, .ms_quarter-circle {
        position: absolute;
    }
    .ms_lines {
        top: 40%;
        left: 5%;
    }
    .ms_quarter-circle {
        bottom: 15%;
        right: 5%;
    }
}
</style>