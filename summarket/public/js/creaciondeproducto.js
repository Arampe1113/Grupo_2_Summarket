window.onload = () => {
  let firstName = document.querySelector('#firstName');
  let lastName = document.querySelector('#lastName');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let userImagee = document.querySelector('#userImage');
  let save = document.querySelector('.save-user');

  save.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
      firstName: 'firstName.value',
      lastName: 'lastName.value',
      email: 'email.value',
      password: ' password.value',
      userImage: 'userImage.value',
    };
    let setting = {
      method: 'POST',
      body: JSON.stringify(data),
      header: {
        'content-type': 'application/json',
      },
    };
    fetch('http://http://localhost:3030/user/register')
      .then((response) => response.json)
      .then((data) => {
        // register.data
        console.log(data);
      });
    console.log(data);
  });
};
