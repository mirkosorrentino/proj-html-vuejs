<script>
export default {
    name: "AppFooter",
    data(){
        return{
            
        }
    }
}
</script>

<template>
    <footer>
        <div class="ms_container">
            <div class="d-flex">
                <div class="ms_address col-6">
                    <div class="ms_footer-title">
                        <h6>Address</h6>
                        <div class="ms_footer-list-item">382 NE 191<span>st</span> # 87394, Miami, FL 33179-3899</div>
                        <div class="ms_footer-list-item">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</div>
                        <div class="ms_footer-list-item">support@maxcoach.com</div>
                    </div>
                </div>
                <div class="ms_footer-lists col-6 d-flex">
                    <div class="col-3">
                        <h6>Explore</h6>
                        <ul>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h6>Information</h6>
                        <ul>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                            <li class="ms_footer-list-item"><a href="">Ciao</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ms_footer-list-item text-center pt-5">2020 MaxCoach, All Rights Reserved</div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

footer {
    width: 100%;
    
    // debug
    height: 300px;
    background-color: violet;
    
}

h6 {
    padding: 1rem 0;
}
.ms_footer-list-item {
    color: gray;
    padding-bottom: 1rem;
    font-size: .8rem;
}

ul {
    padding: 0;
}

.col-4 ul {
    padding-top: 59px;
}
</style>