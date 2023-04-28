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
        <div class="ms_register-photo">
            <img src="../../assets/images/listItem.png" alt="">
            <img src="../../assets/images/maxcoach-shape-05.png" alt="" class="ms_dots">
        </div>
    </div>
    <div class="ms_register ms_container">
        Register 2
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_register {
    padding-top: 5rem;
    // debug
    // background-color: blue;

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
        .ms_dots {
            width: 40%;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}

ul {
    padding-left: 0;
}
</style>