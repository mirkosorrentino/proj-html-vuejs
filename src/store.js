import { reactive } from "vue";

export const store = reactive({
    navList: [
        {
            nameList: "Home", 
            url: "#"
        },
        {
            nameList: "Pages", 
            url: "#"
        },
        {
            nameList: "Courses", 
            url: "#"
        },
        {
            nameList: "Features", 
            url: "#"
        },
        {
            nameList: "Blog", 
            url: "#"
        },
        {
            nameList: "Shop", 
            url: "#"
        },
    ],

    exploreList1:[
        {
            nameList: "Start Here",
            url: "#"
        },
        {
            nameList: "Blog",
            url: "#"
        },
        {
            nameList: "About Us",
            url: "#"
        }
    ],
    
    exploreList2: [
        {
            nameList: "Success story",
            url: "#"
        },
        {
            nameList: "Courses",
            url: "#"
        },
        {
            nameList: "Contact us",
            url: "#"
        }
    ],

    informationList: [ 
        {
            nameList: "Membership",
            url: "#"
        },
        {
            nameList: "Purchase guide",
            url: "#"
        },
        {
            nameList: "Privacy policy",
            url: "#"
        },
        {
            nameList: "Terms of services",
            url: "#"
        }
    ],
    events: [
        {
            place: "Texas, US",
            eventName: "StoryTelling Workshop",
            day: "22",
            month: "nov",
        },
        {
            place: "New York, US",
            eventName: "Painting Art Contest 2020",
            day: "10",
            month: "oct",
        },
        {
            place: "Hamburg, Germany",
            eventName: "International Art Fair 2020",
            day: "23",
            month: "nov",
        },
        {
            place: "Illinois, US",
            eventName: "Street Performance: Call for Artist",
            day: "15",
            month: "dec",
        },
        {
            place: "Illinois, US",
            eventName: "Consumer Food Safety Education Conference",
            day: "22",
            month: "jul",
        },
        {
            place: "Dubai",
            eventName: "How meditation improve your mental health?",
            day: "12",
            month: "aug",
        },
    ]
})