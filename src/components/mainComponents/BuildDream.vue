<script>


export default {
    name: "BuildDream",
    components: {
        
    },
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_build-dream ms_container">
        <div class="ms_subtitle text-center py-2">Start learning coding languages</div>
        <h2 class="text-center pb-5">Build Your Dream <span class="ms_green-title text-uppercase">today</span></h2>
        <div class="grid d-flex pb-5">
            <!-- first card -->
            <div class="ms_card text-center p-3">
                <img src="../../assets/images/home-5-image-box-01.png" alt="">
                <h5 class="ms_card-title text-center">
                    Idea Discussion
                </h5>
                <p class="ms_card-paragraph">Get teamed up with the specialist who work and teach coding for years at famous universities.</p>
                <a href="" class="ms_start-now">Start now</a>
            </div>
            <!-- second card -->
            <div class="ms_card text-center p-3">
                <img src="../../assets/images/home-5-image-box-02.png" alt="">
                <h5 class="ms_card-title">
                    Web Development
                </h5>
                <p class="ms_card-paragraph">Learn to start building a webpage from scratch. You decide your own pace, course and speed.</p>
                <a href="" class="ms_start-now">Start now</a>
            </div>
            <!-- third card -->
            <div class="ms_card text-center p-3">
                <img src="../../assets/images/home-5-image-box-03.png" alt="">
                <h5 class="ms_card-title">
                    System Administration
                </h5>
                <p class="ms_card-paragraph">Get teamed up with the specialist who work and teach coding for years at famous universities.</p>
                <a href="" class="ms_start-now">Start now</a>
            </div>
            <!-- fourth card -->
            <div class="ms_card text-center p-3">
                <img src="../../assets/images/home-5-image-box-04.png" alt="">
                <h5 class="ms_card-title">
                    Graphic Design
                </h5>
                <p class="ms_card-paragraph">Get teamed up with the specialist who work and teach coding for years at famous universities.</p>
                <a href="" class="ms_start-now">Start now</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_build-dream {
    // debug
    background-color: white;
}
.ms_card-paragraph {
    font-weight: 200;
    padding-top: .6rem;
}
.ms_start-now {
    font-weight: 500;
    color: gray;
}
</style>