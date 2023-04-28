<script>
export default {
    name: "AppRegister",
    data(){
        return{
            checkList: ["Select & customize courses to your preferences", "Change the tutor and make arrangements", "Participate in events to join others", "Get the desired certificate delievered at house"]
        }
    }
}
</script>

<template>
    <div class="ms_register ms_container d-flex justify-content-around">
        <div class="ms_register-text col-6">
            <div class="ms_subtitle">Why esitate to register?</div>
            <h2>Learn at your own <span class="ms_green-title">pace</span></h2>
            <ul>
                <li v-for="listItem in checkList">{{ listItem }}</li>
            </ul>
            <button type="button" class="btn ms_btn">Get started for free</button>
        </div>
        <div class="ms_register-photo col-6">
            <img src="../../assets/images/listItem.png" alt="">
            <img src="../../assets/images/maxcoach-shape-05.png" alt="" class="ms_circle-dots">
        </div>
    </div>
    <div class="ms_register ms_container d-flex align-items-center">
        <div class="ms_register-photo col-7">
            <img src="../../assets/images/home-5-image-02-222x300.png" alt="" class="ms_phone-image">
            <img src="../../assets/images/maxcoach-shape-07.png" alt="" class="ms_square-dots">
            <img src="../../assets/images/maxcoach-shape-01.png" alt="" class="ms_lines">
        </div>
        <div class="ms_register-text col-5">
            <div class="ms_subtitle">Why esitate to register?</div>
            <h2>Learn on your <span class="ms_green-title">mobile</span> anytime!</h2>
            <p class="ms_paragraph">Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never interfere with activities of enjoyment or other precious moments.</p>
            <button type="button" class="btn ms_btn">Download our app</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_register {
    padding-top: 5rem;

    img {
        width: 80%;
    }

    li:before {
        content: '✓';
        color: $green-btns;
        padding-right: .5rem;
    }

    li {
        padding-bottom: .8rem;
    }
    .ms_register-photo{
        position: relative;
        .ms_circle-dots {
            width: 40%;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
    .ms_phone-image {
        width: 50%;
    }
    .ms_lines{
        position: absolute;
        width: 20%;
        top: 50%;
        left: -100px;
    }
    .ms_square-dots{
        position: absolute;
        width: 80px;
        height: 150px;
        right: 250px;
        bottom: 50px;
    }

}

ul {
    padding-left: 0;
}
.ms_paragraph {
    font-size: .8rem;
    color: gray;
    padding: 1rem 0;
}
</style>