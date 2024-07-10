



const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const fName = document.getElementById("f_name");
const sName = document.getElementById("s_name");
const highSchool =document.getElementById("high_school")
const college =document.getElementById("College_student")
const employee =document.getElementById("employee")
const step3 =document.getElementById("step3")
const step4 =document.getElementById("step4")




console.log(fName)
console.log(sName)



function goToStep2(){
    

    if( fName.value != "" && sName.value != ""){
        let checkStep = document.getElementById("checked")

        if(!checkStep){
        step1.style.marginRight="200%"
        step2.style.marginLeft = "0%"
        step2.classList.add("checked") 
        } 
        console.log(fName.value)
    } else {
        alert("pleas compelet your name")
    }


   
}


function backToStep1(){

    
  
        step1.style.marginRight="0%"
        step2.style.marginLeft = "200%"
        step2.classList.remove("checked")
    
    
}





function goToStep3(){

    if(employee.checked === true  || college.checked === true || highSchool.checked === true){
        let checkStep = document.getElementById("checked")

        if(!checkStep){
        step2.style.marginRight="200%"
        step3.style.marginLeft = "0%"
        step3.classList.add("checked") 
        } 
    } else {
        alert("please chose your level")
    }


   
}


function backToStep2(){
    step2.style.marginRight="0%"
    step3.style.marginLeft = "200%"
    step3.classList.remove("checked")
}


const step3ch1 = document.getElementById("Formal_education");
const step3ch2 = document.getElementById("high_school_edu");
const step3ch3 = document.getElementById("Diploma");
const step3ch4 = document.getElementById("Undergraduate");
const step3ch5 = document.getElementById("Masters");
const step3ch6 = document.getElementById("Ph_D");



let eduLevel ;

function goToStep4(){
    let checkStep = document.getElementById("checked")

if(step3ch1.checked == true  ||step3ch2.checked == true || step3ch3.checked == true || step3ch4.checked == true || step3ch5.checked == true || step3ch6.checked == true){
    if(!checkStep){
        step3.style.marginRight="200%"
        step4.style.marginLeft = "0%"
        step4.classList.add("checked")
    }
    
} else{
    alert("please compelet your info")
}


let educationLevel = document.querySelectorAll('input[name="student_level"]')


educationLevel.forEach((radio) =>{
    if(radio.checked){
        eduLevel = radio.value;
        console.log(eduLevel)
    }
})

   
}


function SkipToStep4(){

    let checkStep = document.getElementById("checked")

    if(!checkStep){
        step3.style.marginRight="200%"
        step4.style.marginLeft = "0%"
        step4.classList.add("checked")
    }
}





function backToStep3(){
    step3.style.marginRight="0%"
    step4.style.marginLeft = "200%"
    step4.classList.remove("checked")
}

const step5 = document.getElementById("step5")


function skipToStep5(){
    let checkStep = document.getElementById("checked")

    if(!checkStep){
        step4.style.marginRight="200%"
        step5.style.marginLeft = "0%"
        step5.classList.add("checked")
    }

}


function backToStep4(){
    step4.style.marginRight="0%"
    step5.style.marginLeft = "200%"
    step5.classList.remove("checked")
}


const startDate = document.getElementById("start_date")
const endDate = document.getElementById("end_date")


function goToStep5(){
    let checkStep = document.getElementById("checked")

if(startDate.value !="" && endDate.value != ""){

    if(!checkStep){
        step4.style.marginRight="200%"
        step5.style.marginLeft = "0%"
        step5.classList.add("checked")
    } 

} else{
    alert("please pike yore start and education date")
}





   
}

const female = document.getElementById("female")
const male = document.getElementById("male")
const step6 = document.getElementById("step6")


let studentGender;

function goToStep6(){
    let checkStep = document.getElementById("checked")

    if(female.checked == true || male.checked == true){
    
        if(!checkStep){
            step5.style.marginRight="200%"
            step6.style.marginLeft = "0%"
            step6.classList.add("checked")
        } 
    
    } else{
        alert("please pike yore gender")
    }

    
const radios = document.querySelectorAll('[name="student_gender"]');

radios.forEach((radio) =>{
    if(radio.checked){
        studentGender = radio.value;
        console.log(studentGender)
    }
})

// return studentGender;
}


const exp1 = document.getElementById("no_exp")
const exp2 = document.getElementById("3_1exp")
const exp3 = document.getElementById("3_5exp")
const exp4 = document.getElementById("5exp")

function backToStep5(){
    step5.style.marginRight="0%"
    step6.style.marginLeft = "200%"
    step6.classList.remove("checked")
}


const signUp_form = document.getElementById("sign_up_form")

let yearsOfExperienc ;


function goToSignUpForm(){

    let checkStep = document.getElementById("checked")

    if(exp1.checked == true || exp2.checked == true || exp3.checked == true || exp4.checked == true){
        if(!checkStep){
            step6.style.marginRight="200%"
            signUp_form.style.marginLeft = "0%"
            signUp_form.classList.add("checked")
        } 

    }


    
const radios = document.querySelectorAll('[name="student_exp"]');


radios.forEach((radio) =>{
    if(radio.checked){
        yearsOfExperienc = radio.value;
        console.log(yearsOfExperienc)
    }
})


}










function sendEmail(){
let email = document.getElementById("signup_email").value;
let num = Math.floor(1000 + Math.random() * 9000);
console.log(num)
console.log(num)

localStorage.setItem("verificationCode" ,JSON.stringify(num));

let verification_code = JSON.parse(localStorage.getItem("verificationCode"));

console.log(verification_code)



    const params = {
        name:fName.value +""+ sName.value,
        email:email,
        message: verification_code + "" + "كود تأكيد الايميل الخاص بك هو"  ,
    }

 

                    

 const servicesID = "service_nqqa309";
 const templateID = "template_ds9ttaf";

 emailjs
 .send(servicesID,templateID,params)
 .then(res =>{
        username="";
        email= "";

            console.log(res);
        alert("check your gmail")

const otp_popup = document.getElementById("verification_code_form");

otp_popup.style.marginLeft = "0%"
signUp_form.style.marginRight = "200%"


        
    }
 )
 .catch(err => { 
        console.log(err);
        alert("An error occurred while sending the email. Please try again later.");
})



}





const checkCode = document.getElementById("verify_otp");

checkCode.addEventListener("click" , () =>{
    const otpInput1 = document.getElementById("otp1").value;
const otpInput2 = document.getElementById("otp2").value
const otpInput3 = document.getElementById("otp3").value
const otpInput4 = document.getElementById("otp4").value

    const otpValue = [
        otpInput1,otpInput2,otpInput3,otpInput4
    ]
    
    
    const codeToCheck = otpValue.join('');
    
    console.log(otpValue)
    console.log(codeToCheck)
    
let verification_code = JSON.parse(localStorage.getItem("verificationCode"));


if( codeToCheck != verification_code){
    alert("wrong code")
    return
}

alert("right code")
setTimeout(() => {
    window.location.href= "../index.html"
            
        }, 1000);


const eduStartDate = document.getElementById("start_date").value;
const eduEndDate = document.getElementById("end_date").value;
const userEmail = document.getElementById("signup_email").value;
const job_title = document.querySelectorAll(".job_title");
const password = document.getElementById("signup_password").value
const joinDate = new Date()

if(localStorage.getItem("student_info")){
    const user_data = JSON.parse(localStorage.getItem("student_info"))
    user_data.push(
            {
                id:user_data.length +1,
                name:fName.value +" "+ sName.value,
                email:userEmail,
                password:password,
                education_start_date:eduStartDate,
                education_end_date:eduEndDate,
                education_level:eduLevel,
                student_gender:studentGender,
                years_of_experience:yearsOfExperienc,
                join_date:joinDate,

    
            }
        )
    
        localStorage.setItem("student_info" , JSON.stringify(user_data))
    
    } else{
        localStorage.setItem("student_info" , JSON.stringify([
           {
            id:0,
        name:fName.value +" "+ sName.value,
        email:userEmail,
        password:password,
        education_start_date:eduStartDate,
        education_end_date:eduEndDate,
        education_level:eduLevel,
        student_gender:studentGender,
        years_of_experience:yearsOfExperienc,
        join_date:joinDate,

    
           }
        ]))
    }

    
})



const otpInputs = document.querySelectorAll(".otp");
const verifyBtn = document.getElementById("verify_otp");

otpInputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;


        if (e.key === "Backspace") {
            if (currentInput.value === "" && prevInput) {
                prevInput.focus();
                prevInput.value = "";
            }
            return;
        }

    
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        console.log(currentInput);
        console.log(nextInput);

    });



} );


// let goToSignInPage = JSON.parse(localStorage.getItem())


// if()





// ScrollReveal().reveal('.step1' , { delay: 600 , origin: "top" , distance : "50px"});
