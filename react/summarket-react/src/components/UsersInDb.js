import React, { useEffect, useState } from "react";


const User = () => {
    const [users, setUsers] = useState([])

    const fetchUserData = () => {
      fetch('http://localhost:3030/api/v1/users')
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response.data)
          setUsers(response.data)
          })
    }

      useEffect(() => {
        fetchUserData()
      }, [])

  return (
      <div>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.firstName} E-mail: {user.email} </li>
            ))}
          </ul>
        )}
      </div>
  );
}

export default User;


// function UsersInDb(){
//   return (
//       <main className="usuarios"> 
//           <img src={image} alt="Summarket"/>
//           <h2 id="usuarios">Usuarios</h2>
//           <article>
//              <h2>Lorem, ipsum.</h2>
//              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
//               <button>Ver más</button>
//           </article>
//       </main>

//   )
// }  

//   export default UsersInDb;
  