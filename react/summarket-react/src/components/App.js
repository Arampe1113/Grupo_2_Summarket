import React from 'react';
import SideBar from './SideBar';
import {useState, useEffect, useRef} from 'react';
import '../css/App.css';
import Product from './ProductsInDb';

function App() {

  // const urlProducts = 'http://localhost:3030/api/v1/products'
  // const urlUsers = 'http://localhost:3030/api/v1/users'

// //llamar a una API de listados
// const url = 'https://jsonplaceholder.typicode.com/todos/'
// //hook para ver estados
//   const [user, setUser] = useState()
//   const fetchApi = async () => {
//     const response = await fetch(urlUsers)
//     const responseJSON = await response.json()
//     setUser(responseJSON)
//   }

//   //hook que permite tomar del ciclo de vida y ejecutarlo por una vez al iniciar la app
//   useEffect(() => {
//     fetchApi()},
//   [])
  
return (
  <React.Fragment>
    <div className="App">
    <h1 className='Title'>Summarket</h1>
    <SideBar />

    {/* prueba cargando de API listado de tareas
    <ul>
    { !todos ? 'Cargando...' : 
      todos.map( (todo,index)=> {return 
      <li key={index}>{todo.title} {todo.completed ? 'OK': 'NO'}</li>
      })}
    </ul> */}

    </div>
  </React.Fragment>
  );
}

export default App;
