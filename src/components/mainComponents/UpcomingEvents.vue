<script>
import { store } from "../../store"

export default {
    name: "UpcomingEvents",
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="ms_upcoming-events ms_container">
        <div class="ms_subtitle text-center pb-3">Get in contact now</div>
        <h2 class="text-center pb-5">Upcoming <span class="ms_green-title">Events</span></h2>
        <div class="d-flex flex-wrap">
            <div class="ms_event-card col-6 d-flex p-4 justify-content-between"  v-for="event in store.events">
                <div class="ms_main-info">
                    <div class="ms_place">
                        <i class="fa-solid fa-location-dot"></i> {{ event.place }}
                    </div>
                    <div class="ms_event-name">
                        {{ event.eventName }}
                    </div>
                </div>
                <div class="ms_date text-center">
                    <div class="ms_event-day">
                        {{ event.day }}
                    </div>
                    <div class="ms_event-month">
                        {{ event.month }}
                    </div>
                    <div>
                        <button type="button" class="btn ms_btn">Get Ticket</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center ms_invitation">Excited about our Event? <span class="ms_green-title">View all events <i class="fa-solid fa-arrow-right"></i></span></div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_upcoming-events {
    padding-top: 5rem;
    .ms_place {
        font-size: .8rem;
        color: gray;
    }
    .ms_event-day {
        font-size: 2rem;
        font-weight: 400;
        color: $green-btns;
    }
    .ms_event-month {
        text-transform: uppercase;
        font-weight: 500;
        padding-bottom: .5rem;
    }
    .ms_btn {
        padding: 3px 15px;
    }
}
.ms_invitation {
    color: gray;
    padding-top: 2rem;
}
</style>