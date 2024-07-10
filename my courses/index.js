
const smallList = document.getElementById("small_main_list");
let userData = JSON.parse(localStorage.getItem("user_profile_data"))
function openList() {
    let check = document.querySelector(".listOped")

    if (!check) {
        // smallList.style.height = "fit-content"
        // smallList.style.backgroundColor = "white"
        smallList.style.display = "block"


        smallList.style.zIndex = "1"
        smallList.classList.add("listOped")
    } else {

        smallList.style.display = "none"

        smallList.classList.remove("listOped")

    }






}





const not_completed = document.getElementById("not_completed")
const completed = document.getElementById("completed")
const notCompletedCourses = document.getElementById("not_completed_corses")
const CompletedCourses = document.getElementById("completed_courses")


not_completed.addEventListener("click", () => {
    not_completed.classList.toggle("btnChecked");
    completed.classList.remove("btnChecked");
    notCompletedCourses.style.display = "flex"
    CompletedCourses.style.display = "none"


})

completed.addEventListener("click", () => {
    completed.classList.toggle("btnChecked");
    not_completed.classList.remove("btnChecked");
notCompletedCourses.style.display = "none"
    CompletedCourses.style.display = "flex"
})




const verifyCodeToAddCourse = document.getElementById("add_courses");

verifyCodeToAddCourse.addEventListener("click" , () =>{
    const addCorseCode = document.getElementById("corse_code").value;
    console.log(addCorseCode)
    
})

const codePopUp =document.getElementById("popup_add_new_courses_continer")

function addNewCourses(){
    codePopUp.style.display= "flex"

}



const Allcourse = [
  {
    id: 0,
    course: "Juz 1",
    code: 10000000000000,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء الأول من القرآن الكريم يتضمن سورة الفاتحة وبداية سورة البقرة.",
    price: 50,
    sessions: 1,
    rate: 4.9
  },
  {
    id: 1,
    course: "Juz 2",
    code: 10000000000001,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء الثاني من القرآن الكريم يكمل سورة البقرة.",
    price: 50,
    sessions: 1,
    rate: 4.8
  },
  {
    id: 2,
    course: "Juz 3",
    code: 10000000000002,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء الثالث من القرآن الكريم ينتهي من سورة البقرة ويبدأ في سورة آل عمران.",
    price: 50,
    sessions: 1,
    rate: 4.7
  },
  {
    id: 3,
    course: "Juz 4",
    code: 10000000000003,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء الرابع من القرآن الكريم يكمل سورة آل عمران ويبدأ في سورة النساء.",
    price: 50,
    sessions: 1,
    rate: 4.8
  },
  {
    id: 4,
    course: "Juz 5",
    code: 10000000000004,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء الخامس من القرآن الكريم يكمل سورة النساء.",
    price: 50,
    sessions: 1,
    rate: 4.7
  },
  {
    id: 5,
    course: "Juz 6",
    code: 10000000000005,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء السادس من القرآن الكريم يكمل سورة النساء ويبدأ في سورة المائدة.",
    price: 50,
    sessions: 1,
    rate: 4.6
  },
  {
    id: 6,
    course: "Juz 7",
    code: 10000000000006,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء السابع من القرآن الكريم يكمل سورة المائدة ويبدأ في سورة الأنعام.",
    price: 50,
    sessions: 1,
    rate: 4.5
  },
  {
    id: 7,
    course: "Juz 8",
    code: 10000000000007,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Great_Mosque_of_Kairouan.jpg",
    description: "الجزء الثامن من القرآن الكريم يكمل سورة الأنعام ويبدأ في سورة الأعراف.",
    price: 50,
    sessions: 1,
    rate: 4.4
  },

  
];


function addCourse(){
    let buyingCode = document.getElementById("corse_code").value
    console.log(buyingCode)
    const courses = Allcourse.filter(c => c.code == buyingCode);
    
  
    console.log(courses)
    
    
    
    let myCourse = JSON.parse(localStorage.getItem("my_courses"))
  
  if(myCourse){
    myCourse.push(
      ...courses
    )
    localStorage.setItem("my_courses" , JSON.stringify(myCourse))
  } else{
    localStorage.setItem("my_courses" , JSON.stringify(
      courses
    ))
  }
  
  alert("course add")
  window.location.reload()
  
}














function closeCodePopup(){
    codePopUp.style.display= "none"
    
}


const courses = JSON.parse(localStorage.getItem("my_courses"))

const not_completed_parent = document.getElementById("not_completed_corses")

for(i=0; i < courses.length; i++){
 
    let course_card= document.createElement("div")
    course_card.classList.add("course_card")

    let showVideos = document.createElement("button")
    showVideos.classList.add("show_videos")

    let course_card_img = document.createElement("img")

    let courseTitle = document.createElement("h2")
    let courseDiscreption = document.createElement("p")


    let numberOfSession = document.createElement("span")
    numberOfSession.classList.add("lessons")
  
  
    let lessonQuantity = document.createElement("p")
    let lessonImg = document.createElement("img")
  
    let price = document.createElement("h3")


let progressBar = document.createElement("div")
progressBar.role = "progressbar"
progressBar.ariaValuenow = "67"
progressBar.ariaValueMin = "0"
progressBar.ariaValueMax = "100"
progressBar.style= "--value: 67"


not_completed_parent.append(course_card)

    course_card.append(course_card_img)
    course_card.append(courseTitle)
    course_card.append(courseDiscreption)
    course_card.append(numberOfSession);
  numberOfSession.append(lessonQuantity);
  numberOfSession.append(lessonImg);
  course_card.append(price);
  course_card.append(progressBar);
  course_card.append(showVideos)





    course_card_img.src= courses[i].img;
    courseTitle.append(courses[i].course)
    courseDiscreption.append(courses[i].description)
    lessonQuantity.append(  courses[i].sessions +" "+"lesson" )
  lessonImg.src = "../img/video.png"
  price.append(courses[i].price)
  showVideos.id = courses[i].id;
  showVideos.innerText="مشاهدة الفيديوهات"


}


const videos = [
  {
      id: 1,
      course: "Juz 2",
      videoId: 1001,
      title: "Surah Al-Fatihah - The Opening",
      videoUrl: "https://www.youtube.com/embed/KyilK1tMOWQ?si=jaI1Xw7SBqAXtyPs"
  },
  {
      id: 2,
      videoId: 1002,
      title: "Surah Ar-Rahman - The Most Merciful",
      videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ"
  },
  {
      id: 2,
      videoId: 1003,
      title: "Surah Yasin - The Heart of the Quran",
      videoUrl: "https://www.youtube.com/embed/yEAmNisPOzk?si=lD5dkwGTp0ukNY-w"
  },
  {
      id: 1,
      course: "Juz 2",
      videoId: 1004,
      title: "Surah Al-Mulk - The Sovereignty",
      videoUrl: "https://www.youtube.com/embed/Xg3dnwXfsBc?si=vKp5wws9X1eHdgQU"
  },
  {
      id: 1,
      course: "Juz 2",
      videoId: 1005,
      title: "Surah Al-Kahf - The Cave",
      videoUrl: "https://www.youtube.com/embed/SJtSbkKVyr0?si=C2oVgLtk3yHcbEgj"
  },
  {
      id: 1,
      course: "Juz 2",
      videoId: 1006,
      title: "Surah Al-Baqarah - The Cow",
      videoUrl: "https://www.youtube.com/embed/P0uaLRO6V1U?si=_Dtw4lQSYd0u7v5Z"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1007,
      title: "Surah Ad-Duha - The Morning Hours",
      videoUrl: "https://www.youtube.com/embed/RjAJV8_jYQk?si=nxR5oFQJUQ061RuG"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1008,
      title: "Surah Al-Ikhlas - The Sincerity",
      videoUrl: "https://youtu.be/Wy67kXHKzok?si=lmWc3tPc3j63KwsA"
  },
  {
      id: 7,
      videoId: 1009,
      title: "Surah Al-Fajr - The Dawn",
      videoUrl: "https://youtu.be/bbMricF81Xg?si=pdpkoJhVWQb6fre_"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1010,
      title: "Surah Al-Anfal - The Spoils of War",
      videoUrl: "https://youtu.be/cHURL4cTTew?si=OGZEKg77jPVNfpk_"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1011,
      title: "Surah Al-Inshiqaq - The Splitting Open",
      videoUrl: "https://youtu.be/BQNOgHk-3OQ?si=oT6wJJiwfXFXq1Xn"
  },
  {
      id: 3,
    course: "Juz 4",

      videoId: 1012,
      title: "Surah Al-Muzzammil - The Enshrouded One",
      videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
  },
  {
      id: 10,
      videoId: 1013,
      title: "Surah Al-Mu'minun - The Believers",
      videoUrl: "https://www.youtube.com/embed/Hu1PprY5lhU?si=H9oJON8Zbzly_Q7S"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1014,
      title: "Surah Al-Ma'un - The Small Kindnesses",
      videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
  },
  {
      id: 1,
      videoId: 1015,
      title: "Surah Al-Humazah - The Slanderer",
      videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1016,
      title: "Surah Al-Fil - The Elephant",
          videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1017,
      title: "Surah Al-Asr - The Time",
      videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
  },
  {
      id: 1,
      course: "Juz 2",
      videoId: 1018,
      title: "Surah Al-Qadr - The Power",
      videoUrl: "https://www.youtube.com/embed/BbvXMi-OlMI?si=bBsZFJjHjFeV3yoS"
  },
  {
      id: 1,
      course: "Juz 2",
      videoId: 1019,
      title: "Surah Al-Bayyinah - The Clear Evidence",
      videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
  },
  {
      id: 2,
    course: "Juz 3",
      videoId: 1020,
      title: "Surah Al-Nas - The Mankind",
      videoUrl: "https://www.youtube.com/embed/OBzJgk5Hvt0?si=m8U1kAoCnGVhZHsT"
  },
  {
    id: 3,
    course: "Juz 4",

    videoId: 1021,
    title: "Surah Al-Muzzammil - The Enshrouded One",
    videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1022,
    title: "Surah Al-Mu'minun - The Believers",
    videoUrl: "https://www.youtube.com/embed/Hu1PprY5lhU?si=H9oJON8Zbzly_Q7S"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1023,
    title: "Surah Al-Ma'un - The Small Kindnesses",
    videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1024,
    title: "Surah Al-Humazah - The Slanderer",
    videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1025,
    title: "Surah Al-Fil - The Elephant",
        videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1026,
    title: "Surah Al-Asr - The Time",
    videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1027,
    title: "Surah Al-Qadr - The Power",
    videoUrl: "https://www.youtube.com/embed/BbvXMi-OlMI?si=bBsZFJjHjFeV3yoS"
},
{
    id: 3,
    course: "Juz 4",

    videoId: 1028,
    title: "Surah Al-Bayyinah - The Clear Evidence",
    videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
},
{
    id: 4,
    course: "Juz 5",

    videoId: 1029,
    title: "Surah Al-Nas - The Mankind",
    videoUrl: "https://www.youtube.com/embed/OBzJgk5Hvt0?si=m8U1kAoCnGVhZHsT"
},
{
  id: 4,
  course: "Juz 5",

  videoId: 1030,
  title: "Surah Al-Bayyinah - The Clear Evidence",
   videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
}
,
  {
    id: 4,
    course: "Juz 5",

    videoId: 1031,
    title: "Surah Al-Muzzammil - The Enshrouded One",
    videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
},
{
    id: 4,
    course: "Juz 5",

    videoId: 1032,
    title: "Surah Al-Mu'minun - The Believers",
    videoUrl: "https://www.youtube.com/embed/Hu1PprY5lhU?si=H9oJON8Zbzly_Q7S"
},
{
    id: 4,
    course: "Juz 5",

    videoId: 1033,
    title: "Surah Al-Ma'un - The Small Kindnesses",
    videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
},
{
    id: 4,
    course: "Juz 5",

    videoId: 1034,
    title: "Surah Al-Humazah - The Slanderer",
    videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
},
{
    id: 4,
    course: "Juz 5",

    videoId: 1035,
    title: "Surah Al-Fil - The Elephant",
        videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
},
{
    id: 4,
    course: "Juz 5",

    videoId: 1036,
    title: "Surah Al-Asr - The Time",
    videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
},
{
    id: 5,
    course: "Juz 6",
    videoId: 1037,
    title: "Surah Al-Nas - The Mankind",
    videoUrl: "https://www.youtube.com/embed/OBzJgk5Hvt0?si=m8U1kAoCnGVhZHsT"
},
{
  id: 5,
  course: "Juz 6",

  videoId: 1038,
  title: "Surah Al-Bayyinah - The Clear Evidence",
   videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
}
,
  {
    id: 5,
    course: "Juz 6",

    videoId: 1039,
    title: "Surah Al-Muzzammil - The Enshrouded One",
    videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
},
{
    id: 5,
    course: "Juz 6",

    videoId: 1040,
    title: "Surah Al-Mu'minun - The Believers",
    videoUrl: "https://www.youtube.com/embed/Hu1PprY5lhU?si=H9oJON8Zbzly_Q7S"
},
{
    id: 5,
    course: "Juz 6",

    videoId: 1041,
    title: "Surah Al-Ma'un - The Small Kindnesses",
    videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
},
{
    id: 5,
    course: "Juz 6",

    videoId: 1042,
    title: "Surah Al-Humazah - The Slanderer",
    videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
},
{
    id: 5,
    course: "Juz 6",

    videoId: 1043,
    title: "Surah Al-Fil - The Elephant",
        videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
},
{
    id: 5,
    course: "Juz 6",

    videoId: 1044,
    title: "Surah Al-Asr - The Time",
    videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
},
,
{
    id: 6,
    course: "Juz 7",

    videoId: 1045,
    title: "Surah Al-Nas - The Mankind",
    videoUrl: "https://www.youtube.com/embed/OBzJgk5Hvt0?si=m8U1kAoCnGVhZHsT"
},
{
  id: 6,
  course: "Juz 7",

  videoId: 1046,
  title: "Surah Al-Bayyinah - The Clear Evidence",
   videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
}
,
  {
    
    id: 6,
    course: "Juz 7",

    videoId: 1047,
    title: "Surah Al-Muzzammil - The Enshrouded One",
    videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
},
{
    id: 6,
    course: "Juz 7",

    videoId: 1048,
    title: "Surah Al-Mu'minun - The Believers",
    videoUrl: "https://www.youtube.com/embed/Hu1PprY5lhU?si=H9oJON8Zbzly_Q7S"
},
{
    id: 6,
    course: "Juz 7",

    videoId: 1049,
    title: "Surah Al-Ma'un - The Small Kindnesses",
    videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
},
{
    id: 6,
    course: "Juz 7",

    videoId: 1050,
    title: "Surah Al-Humazah - The Slanderer",
    videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
},
{
    id: 6,
    course: "Juz 7",

    videoId: 1051,
    title: "Surah Al-Fil - The Elephant",
        videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
},
{
    id: 6,
    course: "Juz 7",

    videoId: 1052,
    title: "Surah Al-Asr - The Time",
    videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
},

,
{
    id: 7,
    course: "Juz 8",

    videoId: 1053,
    title: "Surah Al-Nas - The Mankind",
    videoUrl: "https://www.youtube.com/embed/OBzJgk5Hvt0?si=m8U1kAoCnGVhZHsT"
},
{
  id: 7,
  course: "Juz 8",

  videoId: 1054,
  title: "Surah Al-Bayyinah - The Clear Evidence",
   videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
}
,
  {
    id: 7,
    course: "Juz 8",

    videoId: 1055,
    title: "Surah Al-Muzzammil - The Enshrouded One",
    videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
},
{
    id: 7,
    course: "Juz 8",

    videoId: 1056,
    title: "Surah Al-Mu'minun - The Believers",
    videoUrl: "https://www.youtube.com/embed/Hu1PprY5lhU?si=H9oJON8Zbzly_Q7S"
},
{
    id: 7,
    course: "Juz 8",

    videoId: 1057,
    title: "Surah Al-Ma'un - The Small Kindnesses",
    videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
},
{
    id: 7,
    course: "Juz 8",

    videoId: 1058,
    title: "Surah Al-Humazah - The Slanderer",
    videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
},
{
    id: 7,
    course: "Juz 8",

    videoId: 1059,
    title: "Surah Al-Fil - The Elephant",
        videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
},
{
    id: 7,
    course: "Juz 8",
    videoId: 1060,
    title: "Surah Al-Asr - The Time",
    videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
},

,
{
    id: 0,
    course: "Juz 1",
    videoId: 1061,
    title: "Surah Al-Nas - The Mankind",
    videoUrl: "https://www.youtube.com/embed/45ENB0xjz80?si=7HolYnEsUlsgM8HV"
},
{
  id: 0,
  course: "Juz 1",
  videoId: 1062,
  title: "Surah Al-Bayyinah - The Clear Evidence",
   videoUrl: "https://www.youtube.com/embed/Sf7gNS6bVO0?si=MUQaK6Ah7uGdXTTY"
}
,
  {
    id: 0,
    course: "Juz 1",
    videoId: 1063,
    title: "Surah Al-Muzzammil - The Enshrouded One",
    videoUrl: "https://www.youtube.com/embed/oA5VDIy5RiM?si=jEMcS_RoIqF9nUcr"
},
{
    id: 0,
    course: "Juz 1",
    videoId: 1064,
    title: "Surah Al-Mu'minun - The Believers",
    videoUrl: "https://www.youtube.com/embed/vX-6WAwJZYY?si=csCSZeU9FoUFpike"
},
{
    id: 0,
    course: "Juz 1",
    videoId: 1065,
    title: "Surah Al-Ma'un - The Small Kindnesses",
    videoUrl: "https://www.youtube.com/embed/EpOS0cNJ0nU?si=-2Skf_88CjvZE-9x"
},
{
    id: 0,
    course: "Juz 1",
    videoId: 1066,
    title: "Surah Al-Humazah - The Slanderer",
    videoUrl: "https://www.youtube.com/embed/yW0dW2Wekpg?si=ws1xvV4VnUR_DzyU"
},
{
    id: 0,
    course: "Juz 1",
    videoId: 1067,
    title: "Surah Al-Fil - The Elephant",
        videoUrl: "https://www.youtube.com/embed/-HC2S8aOfa0?si=XNqGP6Wyas-x1sKQ"
},
{
    id: 0,
    course: "Juz 1",
    videoId: 1068,
    title: "Surah Al-Asr - The Time",
    videoUrl: "https://www.youtube.com/embed/yS-v30dLO2I?si=CtWlWH8DbFtDYdha"
},



];



let cardOfCourse = document.querySelectorAll(".show_videos")

// cardOfCourse.addEventListener("click" , (e) =>{



// })




cardOfCourse.forEach(course =>{
 course.addEventListener("click" , e =>{
  e.stopPropagation();
  let course_videos = videos.filter(vid=> +vid.id == +e.target.id)
  console.log(course_videos);

  localStorage.setItem("courseVedioes" , JSON.stringify(
    course_videos,
    
  ))


  window.location.href = "../course videos/index.html";
 })

})

function logOut(){
  window.location.href = "../index.html"
  localStorage.removeItem("user_profile_data")
  localStorage.removeItem("my_courses")
  localStorage.removeItem("courseVedioes")


}
