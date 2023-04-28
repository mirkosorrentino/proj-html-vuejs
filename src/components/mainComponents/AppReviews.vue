<script>
export default {
    name: "AppReviews",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_app-reviews ms_container">
        <div class="ms_subtitle text-center pb-2">People are praising MaxCoach</div>
        <h2 class="text-center pb-4">What make they <span class="ms_green-title">love us?</span></h2>
        <div class="grid d-flex text-center">
            <div class="col-4 p-3">
                <img src="../../assets/images/testimonial-avata-02.jpg" alt="" class="ms_review-photo">
                <div class="ms_review-paragraph">I am free to learn at my own pace, follow my schedule and choose te subject I like. Great study portal for people like me.</div>
                <div class="ms_review-author">Mina Hollace</div>
                <div class="ms_review-profession">/ Freelancer</div>
            </div>
            <div class="col-4 p-3">
                <img src="../../assets/images/testimonial-avata-02.jpg" alt="" class="ms_review-photo">
                <div class="ms_review-paragraph">I am free to learn at my own pace, follow my schedule and choose te subject I like. Great study portal for people like me.</div>
                <div class="ms_review-author">Mina Hollace</div>
                <div class="ms_review-profession">/ Freelancer</div>
            </div>
            <div class="col-4 p-3">
                <img src="../../assets/images/testimonial-avata-02.jpg" alt="" class="ms_review-photo">
                <div class="ms_review-paragraph">I am free to learn at my own pace, follow my schedule and choose te subject I like. Great study portal for people like me.</div>
                <div class="ms_review-author">Mina Hollace</div>
                <div class="ms_review-profession">/ Freelancer</div>
            </div>
        </div>
        <div class="text-center pt-5">
            <i class="fa-solid fa-circle ms_blue-dot"></i>
            <i class="fa-solid fa-circle ms_gray-dots"></i>
            <i class="fa-solid fa-circle ms_gray-dots"></i>
            <i class="fa-solid fa-circle ms_gray-dots"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_app-reviews {
    padding-top: 8rem;

    .ms_review-photo {
        border-radius: 50%;
        width: 40%;
    }
    .ms_review-paragraph {
        padding-top: 1rem;
        padding-bottom: 1.5rem;
        font-size: .9rem;
        color: $blue-text;
    }
    .ms_review-author {
        font-size: .8rem;
        text-transform: uppercase;
        font-weight: 600;
    }
    .ms_review-profession{
        font-size: .7rem;
        color: gray;
    }
}

.ms_blue-dot {
    font-size: .8rem;
    color: $blue-text;
    padding-right: 10px;
}
.ms_gray-dots {
    font-size: .7rem;
    color: lightgray;
    padding-right: 10px;
}
</style>