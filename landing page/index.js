

const smallList = document.getElementById("small_main_list");


function openList() {
    let check = document.querySelector(".listOped")

    if (!check) {
        smallList.style.height = "fit-content"
        smallList.style.zIndex = "1"
        smallList.classList.add("listOped")
    } else {
        smallList.style.height = "0px"
        smallList.style.zIndex = "-2555555"
        smallList.classList.remove("listOped")
    }



}

const broductsQuantity = document.getElementById("companies_continer")





const companies = [
    {
        companyName: "Google",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        jobstitle: "Software Engineer - مهندس برمجيات",
        jobslocation: "Mountain View, CA",
        jobsdescription: "Develop and maintain software products.",
        imageUrl: "../img/Frame 1000001304.png"
    },
    {
        companyName: "Apple",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        jobstitle: "iOS Developer -مطور iOS",
        jobslocation: "Cupertino, CA",
        jobsdescription: "Design and develop iOS applications.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Microsoft",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",

        jobstitle: "Cloud Solutions Architect - مهندس الحلول السحابية",
        jobslocation: "Washington, D.C.",
        jobsdescription: "Design scalable and secure cloud solutions for enterprise clients.",
        imageUrl: "../img/Frame 1000001304.png"
    },
    {
        companyName: "Amazon",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",



        jobstitle: "Operations Manager - مدير العمليات",
        jobslocation: "Chicago, IL",
        jobsdescription: "Oversee logistics and operational processes for Amazon's fulfillment centers.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Facebook",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",


        jobstitle: "Software Engineer - AI -مهندس برمجيات - الذكاء الاصطناعي",
        jobslocation: "San Francisco, CA",
        jobsdescription: "Develop AI algorithms and systems to enhance Facebook's platform.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Tesla",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
        jobstitle: "Mechanical Engineer - مهندس ميكانيكي",
        jobslocation: "Palo Alto, CA",
        jobsdescription: "Design and develop mechanical systems for Tesla vehicles.",
        imageUrl: "../img/Frame 1000001304.png"
    },



    {
        companyName: "Netflix",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",


        jobstitle: "Content Designer -مصمم المحتوى",
        jobslocation: "Los Gatos, CA",
        jobsdescription: "Curate and design visual content for Netflix's streaming platform.",
        imageUrl: "../img/Frame 1000001304.png"


    },
    {
        companyName: "Uber",
        logoUrl: "../img/uber.png",
        jobstitle: "Data Analyst -محلل بيانات",
        jobslocation: "New York, NY",
        jobsdescription: "Analyze data to improve Uber's operational efficiency and user experience.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Airbnb",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
        jobstitle: "Customer Experience Specialist -أخصائي تجربة العملاء",
        jobslocation: "Dublin, Ireland",
        jobsdescription: "Provide exceptional support and assistance to Airbnb hosts and guests.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Adobe",
        logoUrl: "../img/photoshop.png",
        jobstitle: "Software Engineer -مهندس برمجيات",
        jobslocation: "Seattle, WA",
        jobsdescription: "Develop and maintain software solutions for Adobe's products.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Salesforce",
        logoUrl: "../img/salesforce.png",
        jobstitle: "Software Developer - مطور برامج",
        jobslocation: "Indianapolis, IN",
        jobsdescription: "Develop custom applications and integrations on the Salesforce platform.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "LinkedIn",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
        jobstitle: "Data Scientist",
        jobslocation: "San Francisco, CA",
        jobsdescription: "Analyze data to drive insights and decisions for LinkedIn's products and services.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Twitter",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
        jobstitle: "Content Strategist",
        jobslocation: "San Francisco, CA",
        jobsdescription: "Develop and execute content strategies for Twitter's social media platforms.",
        imageUrl: "../img/Frame 1000001304.png"
    },



    {
        companyName: "Spotify",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",


        jobstitle: "Music Editor",
        jobslocation: "Stockholm, Sweden",
        jobsdescription: "Curate and manage music playlists and content for Spotify's platform.",
        imageUrl: "../img/Frame 1000001304.png"
    },

    {
        companyName: "Snap Inc.",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Snapchat_logo.svg/1280px-Snapchat_logo.svg.png",


        jobstitle: "Augmented Reality Designer",
        jobslocation: "Venice, CA",
        jobsdescription: "Design and develop augmented reality experiences for Snapchat.",
        imageUrl: "../img/Frame 1000001304.png"
    },

    {
        companyName: "EA (Electronic Arts)",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Electronic_Arts_logo.svg/1280px-Electronic_Arts_logo.svg.png",



        jobstitle: "Software Engineer",
        jobslocation: "Austin, TX",
        jobsdescription: "Develop and maintain game engine software for EA's jobstitles.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Adobe",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Adobe_Systems_logo_and_wordmark_%282017%29.svg",



        jobstitle: "Software Engineer",
        jobslocation: "Seattle, WA",
        jobsdescription: "Develop and maintain software solutions for Adobe's products.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Salesforce",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Salesforce_logo.svg/1280px-Salesforce_logo.svg.png",


        jobstitle: "Business Analyst",
        jobslocation: "San Francisco, CA",
        jobsdescription: "Analyze business processes and requirements to optimize Salesforce's CRM solutions.",
        imageUrl: "../img/Frame 1000001304.png"
    },

    {
        companyName: "LinkedIn",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",


        jobstitle: "HR Manager",
        jobslocation: "Sunnyvale, CA",
        jobsdescription: "Oversee human resources operations and strategy at LinkedIn.",
        imageUrl: "../img/Frame 1000001304.png"
    },

    {
        companyName: "Twitter",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",



        jobstitle: "Software Engineer",
        jobslocation: "New York, NY",
        jobsdescription: "Build and maintain scalable software solutions for Twitter's backend systems.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Google",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        jobstitle: "Software Engineer",
        jobslocation: "Mountain View, CA",
        jobsdescription: "Develop and maintain software products.",
        imageUrl: "../img/Frame 1000001304.png"
    },
    {
        companyName: "Apple",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        jobstitle: "iOS Developer",
        jobslocation: "Cupertino, CA",
        jobsdescription: "Design and develop iOS applications.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Microsoft",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",

        jobstitle: "Cloud Solutions Architect",
        jobslocation: "Washington, D.C.",
        jobsdescription: "Design scalable and secure cloud solutions for enterprise clients.",
        imageUrl: "../img/Frame 1000001304.png"
    },
    {
        companyName: "Amazon",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",



        jobstitle: "Operations Manager",
        jobslocation: "Chicago, IL",
        jobsdescription: "Oversee logistics and operational processes for Amazon's fulfillment centers.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Facebook",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",


        jobstitle: "Software Engineer - AI",
        jobslocation: "San Francisco, CA",
        jobsdescription: "Develop AI algorithms and systems to enhance Facebook's platform.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Tesla",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
        jobstitle: "Mechanical Engineer",
        jobslocation: "Palo Alto, CA",
        jobsdescription: "Design and develop mechanical systems for Tesla vehicles.",
        imageUrl: "../img/Frame 1000001304.png"
    },



    {
        companyName: "Netflix",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",


        jobstitle: "Content Designer",
        jobslocation: "Los Gatos, CA",
        jobsdescription: "Curate and design visual content for Netflix's streaming platform.",
        imageUrl: "../img/Frame 1000001304.png"


    },
    {
        companyName: "Uber",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Uber_logo_2018.svg",



        jobstitle: "Data Analyst",
        jobslocation: "New York, NY",
        jobsdescription: "Analyze data to improve Uber's operational efficiency and user experience.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Airbnb",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",



        jobstitle: "Customer Experience Specialist",
        jobslocation: "Dublin, Ireland",
        jobsdescription: "Provide exceptional support and assistance to Airbnb hosts and guests.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Adobe",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Adobe_Systems_logo_and_wordmark_%282017%29.svg",

        jobstitle: "Software Engineer",
        jobslocation: "Seattle, WA",
        jobsdescription: "Develop and maintain software solutions for Adobe's products.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "Salesforce",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Salesforce_logo.svg/1280px-Salesforce_logo.svg.png",



        jobstitle: "Software Developer",
        jobslocation: "Indianapolis, IN",
        jobsdescription: "Develop custom applications and integrations on the Salesforce platform.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    {
        companyName: "LinkedIn",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",



        jobstitle: "Data Scientist",
        jobslocation: "San Francisco, CA",
        jobsdescription: "Analyze data to drive insights and decisions for LinkedIn's products and services.",
        imageUrl: "../img/Frame 1000001304.png"

    },
    // Add more companies and jobs as needed
];

console.log(companies.length)

const companiesParent = document.getElementById("companies_continer");

let quantity = 8;

function companiesJobs(start){
    

    for (let i = start; i < quantity; i++) {
        let companyCard = document.createElement("div");
        companyCard.classList.add("company_card")
    
        let companyCardImg = document.createElement("img")
    
        let companyCardName = document.createElement("span")
        companyCardName.classList.add("company_name_img")
    
        let companyCardNameLogo = document.createElement("img")
        let companyCardNameTitle = document.createElement("p")
    
        let jobTitle = document.createElement("p")
        jobTitle.classList.add("job_Title")
    
        let jobDiscreption = document.createElement("p")
        jobDiscreption.classList.add("job_discreotion")
    
    
        let workTime = document.createElement("div")
        workTime.classList.add("work_time")
    
    
        let TimeForWork = document.createElement("span")
        let daysForWork = document.createElement("span")
    
        let TimeForWorkImg = document.createElement("img")
        let TimeForWorkP = document.createElement("p")
    
        let daysForWorkImg = document.createElement("img")
        let daysForWorkP = document.createElement("p")
    
    
        companiesParent.append(companyCard)
        companyCard.append(companyCardImg)
        companyCard.append(companyCardName)
        companyCardName.append(companyCardNameLogo)
        companyCardName.append(companyCardNameTitle)
        companyCard.append(jobTitle)
        companyCard.append(jobDiscreption)
        companyCard.append(workTime)
        workTime.append(TimeForWork)
        workTime.append(daysForWork)
        TimeForWork.append(TimeForWorkImg)
        TimeForWork.append(TimeForWorkP)
        daysForWork.append(daysForWorkImg)
        daysForWork.append(daysForWorkP)
    
    
    
    
    
    
    
    
    
    
    
    
        companyCardImg.src = companies[i]&&companies[i].imageUrl&&companies[i].imageUrl;
        // console.log(companies[i].imageUrl)
        companyCardNameLogo.src = companies[i].logoUrl
        companyCardNameTitle.append(companies[i].companyName)
        jobTitle.append(companies[i].jobstitle)
        jobDiscreption.append(companies[i].jobsdescription)
        TimeForWorkImg.src = "../img/vector100.png"
        TimeForWorkP.innerText = "5 ساعات"
        daysForWorkImg.src = "../img/stopwatch.png"
        daysForWorkP.innerText = "2 اسبوع"
    

        



    }
    
}

companiesJobs(0)

function showMoreJobs() {


     let checkLength = document.querySelector(".check_length")
     const showMoreBtn = document.getElementById("showMore")
     const quantityP = document.getElementById("jobs_quantity");

     if(!checkLength){

        quantity = companies.length
        companiesJobs(8)
        showMoreBtn.innerText = "عرض اقل"
        quantityP.innerText = quantity
        showMoreBtn.classList.add("check_length")
        
     } else{
        // companiesJobs(0 , "empty")
        companiesParent.innerHTML="";
        quantity = 8;
        companiesJobs(0)
        showMoreBtn.innerHTML = "عرض المزيد"
        showMoreBtn.classList.remove("check_length")
        quantityP.innerText = quantity

        
     }

}


const twetts = document.getElementById("twetts")
const twetts2 = document.getElementById("twetts2")
const twetts3 = document.getElementById("twetts3")




function prevBtn(){
    

    const checkTwett1 = document.querySelector(".check_twett1")

    if(!checkTwett1){
    twetts.style.marginLeft = "200%"
    twetts2.style.marginLeft = "0"
    twetts2.classList.add("check_twett1")
    } else{
        twetts2.style.marginRight = "-200% "
        twetts3.style.marginLeft = "0px" 
    twetts2.classList.add("check_twett1")
    // twetts.style.marginLeft = "-200%"










    }

}



function nextBtn(){
    const checkTwett1 = document.querySelector(".check_twett1")

    if(!checkTwett1){
    twetts.style.marginLeft = "0%"
    twetts2.style.marginLeft = "200%"
    twetts2.classList.add("check_twett1")
    } else{
        twetts2.style.marginRight = "0% "
        twetts3.style.marginLeft = "-200%" 
    twetts2.classList.add("check_twett1")
    
    }
}


let signUpNav = JSON.parse(localStorage.getItem("student_info"))
let navSign = document.getElementById("signUp_nav")
let mainNav = document.getElementById("main_nav")

console.log(signUpNav)


if(!signUpNav){
    navSign.style.display= "flex";
    mainNav.style.display= "none"
}


function logOut(){
    window.location.href = "../index.html"
    localStorage.removeItem("user_profile_data")
  }