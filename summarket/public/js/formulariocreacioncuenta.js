window.onload =() => {
let firstName = document.querySelector("#firstName");
let lastName= document.querySelector("#lastName");
let email= document.querySelector("#email");
let password= document.querySelector("#password");
let userImagee= document.querySelector("#userImage");
let save =document.querySelector(".save-user");

Save.addEventListener("click", (e) => {
    const data={
        firstName:"firstName.value",
        lastName:"lastName.value",
        email:"email.value",
        password: " password.value",
        userImage:"userImage.value",
    }
    console.log(data)
 })



}

