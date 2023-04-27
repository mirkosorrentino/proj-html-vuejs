<script>
export default {
    name: "SuccessData",
    data(){
        return{
            successDatas: [
                {
                    number: "1.926",
                    detail: "Finished lessons"
                },
                {
                    number: "3092+",
                    detail: "Enrolled learners"
                },
                {
                    number: "200",
                    detail: "Online instructors"
                },
                {
                    number: "100%",
                    detail: "Satisfaction rate"
                },
            ]
        }
    }
}
</script>

<template>
    <div class="ms_success-data ms_container">
        <div class="grid d-flex text-center">
            <div class="col-3" v-for="data in successDatas">
                <div class="ms_number-data"><h2>{{ data.number }}</h2> </div>
                <div class="ms_detail-data"> {{ data.detail }} </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_success-data {
    padding: 4rem 0;
    
    h2 {
        font-weight: 700;
        color: $green-btns;
    }
    .ms_detail-data {
        text-transform: uppercase;
        color: $blue-text;
        font-weight: 400;
        font-size: .8rem;
    }
}
</style>