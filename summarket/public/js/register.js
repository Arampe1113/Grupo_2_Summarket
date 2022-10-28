window.addEventListener('load', function () {
  let firstName = document.querySelector('#firstName');
  let lastName = document.querySelector('#lastName');
  let errorName = document.querySelector('.errFirstName');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let userImagee = document.querySelector('#userImage');
  let save = document.querySelector('.save-user');
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
});
