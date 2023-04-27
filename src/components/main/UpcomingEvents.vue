<script>
export default {
    name: "UpcomingEvents",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_upcoming-events ms_container">
        Upcoming Events
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_upcoming-events {
    // debug
    height: 200px;
    background-color: white;
    margin-top: 20px;
}
</style>