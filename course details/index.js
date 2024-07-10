const defaultBtn = document.getElementById("defualt_checked")
const messionsBtn = document.getElementById("messions_Btn")
const commentsBtn = document.getElementById("comments_Btn")
const coursesBtn = document.getElementById("courses_Btn")


defaultBtn.style.backgroundColor = "#E6F2F8";
    defaultBtn.style.color = "#0778B5";




    const smallList = document.getElementById("small_main_list");


    function openList() {
        let check = document.querySelector(".listOped")
    
        if (!check) {
            smallList.style.display = "block"
            smallList.style.zIndex = "1"
            smallList.classList.add("listOped")
        } else {
            smallList.style.display = "none"
            // smallList.style.zIndex = "-2555555"
            smallList.classList.remove("listOped")
        }
    
    
    
    }

    
function samary(){
  window.location.href="#panner_data"
    defaultBtn.style.backgroundColor = "#E6F2F8";
    defaultBtn.style.color = "#0778B5";

    messionsBtn.style.backgroundColor = "white";
    messionsBtn.style.color = "black";

    commentsBtn.style.backgroundColor = "white";
    commentsBtn.style.color = "black";

    coursesBtn.style.backgroundColor = "white";
    coursesBtn.style.color = "black";
}


function mession(){
    messionsBtn.style.backgroundColor = "#E6F2F8";
    messionsBtn.style.color = "#0778B5";

    defaultBtn.style.backgroundColor = "white";
    defaultBtn.style.color = "black";

    commentsBtn.style.backgroundColor = "white";
    commentsBtn.style.color = "black";


    coursesBtn.style.backgroundColor = "white";
    coursesBtn.style.color = "black";
  window.location.href = "#messions"

}


function comments(){
  window.location.href = "#feedbacks"

    commentsBtn.style.backgroundColor = "#E6F2F8";
    commentsBtn.style.color = "#0778B5";

    defaultBtn.style.backgroundColor = "white";
    defaultBtn.style.color = "black";

    messionsBtn.style.backgroundColor = "white";
    messionsBtn.style.color = "black";

    coursesBtn.style.backgroundColor = "white";
    coursesBtn.style.color = "black";
}


function courses(){
  window.location.href = "#courses_continer"

  coursesBtn.style.backgroundColor = "#E6F2F8";
  coursesBtn.style.color = "#0778B5";

  messionsBtn.style.backgroundColor = "white";
  messionsBtn.style.color = "black";

  commentsBtn.style.backgroundColor = "white";
  commentsBtn.style.color = "black";

  defaultBtn.style.backgroundColor = "white";
    defaultBtn.style.color = "black";
}


window.onscroll = function() {NavBarFixed()};

function NavBarFixed() {
    
const nav = document.getElementById("nav")
  


  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.position= "fixed"
    nav.style.top= "0px"
    nav.style.backgroundColor= "white"
    nav.style.borderBottom= ".1px solid gray"




  } else {
    nav.style.position= "unset"
    nav.style.borderBottom= "unset"

  
}
}


var acc = document.getElementsByClassName("accordion");
var accArrow = document.getElementsByClassName("accordion img");

var i;

for (i = 0; i < acc.length; i++) {
    // accArrow.src= ""
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
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






const coursesContiner = document.getElementById("courses_continer")

for(i=0; i< Allcourse.length; i++){
  let courseCard = document.createElement("div")
  courseCard.classList.add("course_card")


  let courseCardImg = document.createElement("div")
  courseCardImg.classList.add("course_cardImg_continer")
  let courseImg = document.createElement("img")

  let courseTitle = document.createElement("h2")

  let courseDescription = document.createElement("p")

  let numberOfSession = document.createElement("span")
  numberOfSession.classList.add("lessons")


  let lessonQuantity = document.createElement("p")
  let lessonImg = document.createElement("img")

  let price = document.createElement("h3")

  

  coursesContiner.append(courseCard);
  courseCard.append(courseCardImg);
  courseCardImg.append(courseImg);
  courseCard.append(courseTitle);
  courseCard.append(courseDescription);
  courseCard.append(numberOfSession);
  numberOfSession.append(lessonQuantity);
  numberOfSession.append(lessonImg);
  courseCard.append(price);






  courseImg.src = Allcourse[i].img
  courseTitle.append(Allcourse[i].course)
  courseDescription.append(Allcourse[i].description)
  lessonQuantity.append(  Allcourse[i].sessions +" "+"lesson" )
  lessonImg.src = "../img/video.png"
  price.append(Allcourse[i].price +"" + "$")
// console.log(courseCard)


courseCard.addEventListener("click" , () =>{

  let popUp = document.getElementById("popup_add_new_courses_continer")
  
    popUp.style.display="flex"
 
})

function closeCodePopup(){
  let popUp = document.getElementById("popup_add_new_courses_continer")

  popUp.style.display="none"

}




}


const getNewCours = document.getElementById("add_courses")




getNewCours.addEventListener("click" , () =>{
  let buyingCode = document.getElementById("corse_code").value;

  if(buyingCode.length === 0){
    alert("wrong code")
    return
  }
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

alert("course add sucssesfuly")
console.log(myCourse)

})





function logOut(){
  window.location.href = "../index.html"
  localStorage.removeItem("user_profile_data")
}