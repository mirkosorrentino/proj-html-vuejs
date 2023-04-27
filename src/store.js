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
    ]
})