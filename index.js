




function goToHomePage(){
    // console.log("sklxaskjcddcj")
    const signInInput = document.getElementById("email").value;

    // Retrieve user information from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("student_info"));
    
    if (storedUsers) {
        // Define a function to find a user by email
        const findUserByEmail = (email) => {
            return storedUsers.find(user => user.email === email);
        };
    
        const emailToFind = signInInput;
        const user = findUserByEmail(emailToFind);
    
        if (user) {
            alert('User found:');
            console.log('User found:', user);
    
            // Store user profile data in localStorage
            localStorage.setItem("user_profile_data", JSON.stringify(user));
    
            // Redirect to landing page
            window.location.href = "../landing page/index.html";
        } else {
            alert('User not found');
        }
    } else {
        alert('User not found');
        console.log('No users found in local storage');
    }
    
    


    }



   


// console.log(signInInput)


// if(!checkEmail){
//     alert("email not found")
// } else{

//     for( let i =0 ; i<= checkEmail.length; i++){

//         if( signInInput != checkEmail[i].email){
//             alert("wrong email")
//         } else{
//             alert("correct email")
//             
//         }
//     }
    


  







ScrollReveal().reveal('.signIn_form_continer' , { delay: 600 , origin: "top" , distance : "50px"});
