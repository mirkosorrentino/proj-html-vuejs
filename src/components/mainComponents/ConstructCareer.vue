<script>
export default {
    name: "ConstructCareer",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_construct-career ms_container d-flex">
        <div class="col-6">
            <img src="../../assets/images/about-us-03-image-01.png" alt="">
        </div>
        <div class="col-6">
            <div class="ms_subtitle pb-2">Dream with <span class="ms_bolder-subtitle">Maxcoach</span></div>
            <h2 class="pb-4">Construct A <span class="ms_green-title">Stunning</span> Career Perspective</h2>
            <div class="d-grid gap-2">
                <button class="btn ms_btn text-start" type="button">Multiple Platform Supported for Teaching & Studying</button>
            </div>
            <div class="ms_construct-career-paragraph pt-4">MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any advice.</div>
            <div class="d-grid gap-2">
                <button class="btn text-start ms_falses-btn" type="button">Multiple Course Participation at the Same Time</button>
            </div>
            <div class="d-grid gap-2">
                <button class="btn text-start ms_falses-btn" type="button">Track Study Progress & Deliver Prompt Feedback</button>
            </div>
            
            
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_construct-career {
    padding: 2rem 0;

    h2 {
        font-size: 2.9rem;
    }
    img {
        width: 65%;
        padding-left: 60px;
    }
    .ms_bolder-subtitle {
        font-weight: 600;
    }
}
.ms_construct-career-paragraph {
    padding: 0 30px;
    font-weight: 200;
    padding-top: .6rem;
}
.ms_btn {
    font-size: 1rem;
}
.ms_falses-btn {
    padding-top: 3rem;
}
</style>