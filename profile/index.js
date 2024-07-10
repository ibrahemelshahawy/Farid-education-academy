
const smallList = document.getElementById("small_main_list");
let userData = JSON.parse(localStorage.getItem("user_profile_data"))
const navSigninOrUp = document.getElementById("goToSignin_signUp")





if(!userData){
    navSigninOrUp.style.display= "flex"
}

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

function getDataFromLocalstorage(){
    
let userData = JSON.parse(localStorage.getItem("user_profile_data"))

console.log(userData)


    const userName = document.getElementById("user_name")
    const gender = document.getElementById("gender")
    const join_date = document.getElementById("JoinDate")
    
    // console.log(userName[i].name)
    
    userName.innerText= userData.name;
    gender.innerText= userData.student_gender;
    join_date.innerText = userData.join_date;


    var eduLevelRadio = document.querySelectorAll('.edu_level');


    console.log(eduLevelRadio)
    console.log(userData.education_level)

eduLevelRadio.forEach((radio) =>{
let userData = JSON.parse(localStorage.getItem("user_profile_data"))

    if(radio.value != userData.education_level){
        console.log("Bad days والله")
        
    } else{
        radio.checked = true

    }
})

const startDate = document.getElementById("startDAte")
const endDate = document.getElementById("endDate")

startDate.value = userData.education_start_date
endDate.value = userData.education_end_date

}

getDataFromLocalstorage()


function removeUserData(){
    const userName = document.getElementById("user_name")
    const gender = document.getElementById("gender")
    const join_date = document.getElementById("JoinDate")
    
    // console.log(userName[i].name)
    
    userName.innerText= ""
    gender.innerText= ""
    join_date.innerText = ""


    var eduLevelRadio = document.querySelectorAll('.edu_level');


    console.log(eduLevelRadio)
    console.log(userData.education_level)

eduLevelRadio.forEach((radio) =>{
let userData = JSON.parse(localStorage.getItem("user_profile_data"))

    if(radio.value != userData.education_level){
        console.log("Bad days والله")
        
    } else{
        radio.checked = false

    }
})

const startDate = document.getElementById("startDAte")
const endDate = document.getElementById("endDate")

startDate.value =""
endDate.value = ""

}


const popup = document.getElementById("popup_delete_account_continer")
const deleteAccount = document.getElementById("delete")


function openPopUp(){
    popup.style.display="flex"
    
}

function closePopup(){
    popup.style.display="none"
}

function logOut(){
    localStorage.removeItem("user_profile_data")
    window.location.href = "../index.html"
}



deleteAccount.addEventListener("click" , () =>{
    popup.style.display="none !important"
    localStorage.removeItem("user_profile_data")
    removeUserData()


// getDataFromLocalstorage()

})




