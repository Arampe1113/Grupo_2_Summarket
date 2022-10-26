window.onload = () => {
    let email = document.querySelector("#email");
    let password = document.querySelector ("#password")

function login()
{
     email = document.GetElementById("email").value;
     password = document.GetElementById("password").value;

     if(email =="" || password =="")
      {
            alert("Recuerda que estos campos son obligatorios");
          unm.focus();//or you can check each field separately to focus the empty field
      }        
 
    }
}
