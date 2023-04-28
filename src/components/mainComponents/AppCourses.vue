<script>
export default{
    name: "AppCourses",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="ms_courses ms_container">
        <div class="ms_subtitle text-center">Choose where you'd like to begin</div>
        <h2 class="text-center pb-3 pt-2">Latest Featured <span class="ms_green-title">Courses</span></h2>
        <div class="grid d-flex flex-wrap">
            <!-- first card -->
            <div class="col-4 p-3">
                <div class="ms_courses-card">
                    <img src="../../assets/images/course-02-480x298.jpg" alt="" class="pb-3">
                    <div class="ms_container">
                        <div class="ms_course-teacher">
                            <img src="../../assets/images/73ee246daf47502812ccefc84bf02898 (1).jpeg" alt="" class="ms_teacher-photo">
                            <span class="ms_teacher-lessons">Blanche Fields</span>
                        </div>
                        <div class="ms_courses-name">Learning to Write as a Professional Author</div>
                        <div class="ms_course-datas">
                            <span class="ms_teacher-lessons">20 lessons</span>
                            <span class="ms_teacher-lessons">50 students</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- second photo -->
            <div class="col-4 p-3">
                <div class="ms_courses-card">
                    <img src="../../assets/images/course-02-480x298.jpg" alt="" class="pb-3">
                    <div class="ms_container">
                        <div class="ms_course-teacher">
                            <img src="../../assets/images/73ee246daf47502812ccefc84bf02898 (1).jpeg" alt="" class="ms_teacher-photo">
                            <span class="ms_teacher-lessons">Blanche Fields</span>
                        </div>
                        <div class="ms_courses-name">Learning to Write as a Professional Author</div>
                        <div class="ms_course-datas">
                            <span class="ms_teacher-lessons">20 lessons</span>
                            <span class="ms_teacher-lessons">50 students</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- third card -->
            <div class="col-4 p-3">
                <div class="ms_courses-card">
                    <img src="../../assets/images/course-02-480x298.jpg" alt="" class="pb-3">
                    <div class="ms_container">
                        <div class="ms_course-teacher">
                            <img src="../../assets/images/73ee246daf47502812ccefc84bf02898 (1).jpeg" alt="" class="ms_teacher-photo">
                            <span class="ms_teacher-lessons">Blanche Fields</span>
                        </div>
                        <div class="ms_courses-name">Learning to Write as a Professional Author</div>
                        <div class="ms_course-datas">
                            <span class="ms_teacher-lessons">20 lessons</span>
                            <span class="ms_teacher-lessons">50 students</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fourth card -->
            <div class="col-4 p-3">
                <div class="ms_courses-card">
                    <img src="../../assets/images/course-02-480x298.jpg" alt="" class="pb-3">
                    <div class="ms_container">
                        <div class="ms_course-teacher">
                            <img src="../../assets/images/73ee246daf47502812ccefc84bf02898 (1).jpeg" alt="" class="ms_teacher-photo">
                            <span class="ms_teacher-lessons">Blanche Fields</span>
                        </div>
                        <div class="ms_courses-name">Learning to Write as a Professional Author</div>
                        <div class="ms_course-datas">
                            <span class="ms_teacher-lessons">20 lessons</span>
                            <span class="ms_teacher-lessons">50 students</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fifth card -->
            <div class="col-4 p-3">
                <div class="ms_courses-card">
                    <img src="../../assets/images/course-02-480x298.jpg" alt="" class="pb-3">
                    <div class="ms_container">
                        <div class="ms_course-teacher">
                            <img src="../../assets/images/73ee246daf47502812ccefc84bf02898 (1).jpeg" alt="" class="ms_teacher-photo">
                            <span class="ms_teacher-lessons">Blanche Fields</span>
                        </div>
                        <div class="ms_courses-name">Learning to Write as a Professional Author</div>
                        <div class="ms_course-datas">
                            <span class="ms_teacher-lessons">20 lessons</span>
                            <span class="ms_teacher-lessons">50 students</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- sixth card -->
            <div class="col-4 p-3">
                <div class="ms_courses-card">
                    <img src="../../assets/images/course-02-480x298.jpg" alt="" class="pb-3">
                    <div class="ms_container">
                        <div class="ms_course-teacher">
                            <img src="../../assets/images/73ee246daf47502812ccefc84bf02898 (1).jpeg" alt="" class="ms_teacher-photo">
                            <span class="ms_teacher-lessons">Blanche Fields</span>
                        </div>
                        <div class="ms_courses-name">Learning to Write as a Professional Author</div>
                        <div class="ms_course-datas">
                            <span class="ms_teacher-lessons">20 lessons</span>
                            <span class="ms_teacher-lessons">50 students</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ms_courses {
    padding-top: 3rem;
    .ms_course-teacher {
        .ms_teacher-photo {
            width: 10%;
            border-radius: 50%;
            padding-right: 7px;
        }
    }
    .ms_courses-name {
        font-weight: 500;
        padding: .6rem 0 1rem;
    }
}
.ms_teacher-lessons {
    font-size: .8rem;
    color: gray;
    padding-right: 2rem;
}
</style>