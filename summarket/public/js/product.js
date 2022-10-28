// ○ Nombre
// ■ Obligatorio.
// ■ Deberá tener al menos 5 caracteres.
// ○ Descripción
// ■ Deberá tener al menos 20 caracteres.
// ○ Imagen
// ■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).

window.onload = () => {
  let Name = document.querySelector('#name');
  let description = document.querySelector('#description');
  let productImg = document.querySelector('#productImg');
  let containerErrores = document.querySelector('#errores');

  let ncontador = Name.value.length;

  // Name.addEventListener('focusout', function () {
  //   if (ncontador < 4) {
  //     containerErrores.innerHTML =
  //       '<li>El nombre del producto debe tener minimo 2 caracteres</li>';
  //     containerErrores.style.color = 'red';
  //   }
  // });

  //   let ncontador = Name.value.length;
  //   function contar() {
  //     if (ncontador <= 4) {
  //       p.innerText = 'El nombre del producto debe tener minimo 5 caracteres';
  //       p.style.color = 'red';
  //     }
  //   }

  // let dcontador = description.value.length;
  // function contar() {
  //   if (dcontador <= 20) {
  //     p.innerText =
  //       'La descripción del producto debe tener minimo 20 caracteres ';
  //     p.style.color = 'red';
  //   }
  // }

  //    let form = document.getElementById('uploadForm'),
  //     imageInput = document.getElementById('file');

  function validateFile() {
    let allowedExtension = ['jpeg', 'JPEG', 'PNG', 'GIF'];
    let fileExtension = document
      .getElementById('productImg')
      .value.split('.')
      .pop()
      .toLowerCase();
    let isValidFile = false;

    for (let index in allowedExtension) {
      if (fileExtension === allowedExtension[index]) {
        isValidFile = true;
        break;
      }
    }

    if (!isValidFile) {
      alert('Allowed Extensions are : *.' + allowedExtension.join(', *.'));
    }

    return isValidFile;
  }
};

console.log('prueba');

// const { json } = require("body-parser");

// window.onload = () => {
//     let firstName = document.querySelector("#firstName");
//     let lastName = document.querySelector("#lastName");
//     let email = document.querySelector("#email");
//     let password = document.querySelector("#password");
//     let userImagee = document.querySelector("#userImage");
//     let save = document.querySelector(".save-user");

//     save.addEventListener("click", (e) => {
//         e.preventDefault();
//         const data = {
//             firstName: "firstName.value",
//             lastName: "lastName.value",
//             email: "email.value",
//             password: " password.value",
//             userImage: "userImage.value",
//         }
//         let setting = {
//             "method": "POST",
//             "body": JSON.stringify(data),
//             "header": {
//                 "content-type": "application/json"
//             }
//         }
//         // fetch("http://http://localhost:3030/user/register")
//         //     .then(response => response.json)
//         //     .then(data => {
//         //         // register.data
//         //         console.log(data);
//         //     })

//         console.log(data)
//     })
// }
