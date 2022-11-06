// import React from "react";
// import '../css/App.css';
import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
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
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App();



// function Products() {
//     return (
//       <div className="col-lg-6 mb-4">
//         <div className="card shadow mb-4">
//           <div className="card-header py-3">
//             <h5 className="m-0 font-weight-bold text-gray-800">
//               Products in Data Base
//             </h5>
//           </div>
//           <div className="card-body">
//             <div className="row">
//               <div className="col-lg-6 mb-4">
//                 <div className="card bg-dark text-white shadow">
//                   <div className="card-body">Productos</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

  