const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  // 7 a 14 numeros.
};

window.addEventListener('load', function () {
  let firstName = document.querySelector('#firstName');
  let lastName = document.querySelector('#lastName');
  let errorName = document.querySelector('.errFirstName');
  let errorEmail = document.querySelector('.errEmail');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let userImagee = document.querySelector('#userImage');
  let p = document.querySelector('#mensaje-error');
  let bottonsave = document.querySelector('.save-user');

  firstName.addEventListener('focusout', function (e) {
    e.preventDefault();
    let errores = {};

    if (firstName.value.length < 2) {
      errores.firstName = 'este campo debe tener al menos dos caracteres';
    }

    if (Object.keys(errores).length >= 1) {
      errorName.innerText = errores.firstName ? errores.firstName : '';
    } else {
      bottonsave.submit();
    }

    //   if(firstName.value == null || firstName.value=0 || /^\s+$/.test(firstName)){
    //     errores.firstName="Este campo no puede estar vacio"
    //   }
  });

  email.addEventListener('focusout', function (e) {
    e.preventDefault();
    let errores = {};
    if (!expresiones.correo.test(email.value)) {
      errores.email = 'Debes utilizar un correo electronico valido';
    }

    if (Object.keys(errores).length >= 1) {
      errorEmail.innerText = errores.email ? errores.email : '';
    } else {
      bottonsave.submit();
    }
  });

  bottonsave.addEventListener('submit', function (e) {
    e.preventDefault();
    let erroresSubmit = [];
    if (firstName.value == '') {
      erroresSubmit.push('Este campo es obligatorio');
    }

    if (email.value == '') {
      erroresSubmit.push('Este campo es obligatorio');
    }

    if (password.value == '') {
      erroresSubmit.push('Este campo es obligatorio');
    }

    if (erroresSubmit > 0) {
      console.log(erroresSubmit);
      e.preventDefault();
      let ulErrores = document.querySelector('div.errores ul');

      for (let i = 0; i < erroresSubmit.length; i++) {
        ulErrores.innerHTML += '<li>' + erroresSubmit[i] + '</li>';
      }
    }
  });
});
