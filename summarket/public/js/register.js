window.onload = () => {
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let userImagee = document.querySelector("#userImage");
    let save = document.querySelector(".save-user");
    let p = document.querySelector("#mensaje-error");
    let bottonsave = document.querySelector("#botton-save-user");


let fncontador = firstName.value.length;
    function contar() {
        if (fncontador <= 4) {
            p.innerText = "Tu nombre debe tener minimo 3 caracteres"
            p.style.color = "red";
        }
    }
firstName.addEventListener("keypress", function (e) {
        fcontador = (first.value.length);
        contar()
    });

let lcontador = lastName.value.length;
    function contar(){
        if (lcontador <= 3) {
            p.innerText = "Tu apellido debe tener minimo 3 caracteres"
            p.style.color = "red";
        }
    }
LastName.addEventListener("keypress", function (e) {
        fcontador = (first.value.length);
        contar()

    });

    let contains = email.contains;
    function includes(){
    if(includes != "@"){
    p.innerText = "tu correo debe contener un @"
    p.style.color ="red";
   }}
   
email.addEventListener("keypress", function (e) {
        includes = (email.contains);
        includes() 
 });


let pcontador = password.value.length;
    function contar()
        if (pcontador <= 3) {
            p.innerText = "Tu apellido debe tener minimo 3 caracteres";
            p.style.color = "red";
        }else if (pcontador>4 && pcontador <=10){
            p.innerText ="la contraseña debe tener mas caracteres";
            p.style.color="orange";
        }else {
            p.innerText="la contaseña es segura";
            p.style.color ="green";

        }
    }

    // save.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     const data = {
    //         firstName: "firstName.value",
    //         lastName: "lastName.value",
    //         email: "email.value",
    //         password: " password.value",
    //         userImage: "userImage.value",
    //     }
    //     let setting = {
    //         "method": "POST",
    //         "body": JSON.stringify(data),
    //         "header": {
    //             "content-type": "application/json"
    //         }
    //     }
    // fetch("http://http://localhost:3030/user/register")
    //     .then(response => response.json)
    //     .then(data => {
    //         // register.data
    //         console.log(data);
    //     })
    console.log(data)