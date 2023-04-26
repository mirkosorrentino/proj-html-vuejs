<script>
import BuildDream from './BuildDream.vue'
import ConstructCareer from './ConstructCareer.vue'
import SuccessData from './SuccessData.vue'

export default {
    name: "AppMain",
    components: {
        BuildDream,
        ConstructCareer,
        SuccessData
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
    </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

main {
    width: 100%;

    // debug
    background-color: lightgreen;
    padding: 20px 0;
}
</style>