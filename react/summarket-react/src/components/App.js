import React from 'react';
import SideBar from './SideBar';
import {useState, useEffect, useRef} from 'react';
import '../css/App.css';

function App() {

// llamar a una API de listados
const urlProducts = 'http://localhost:3030/api/v1/products'
const urlUsers = 'http://localhost:3030/api/v1/users'
//const url = 'https://jsonplaceholder.typicode.com/todos/'

//hook para ver estados
  const [user, setUser] = useState()
  const fetchApi = async () => {
    const response = await fetch(user)
    const responseJSON = await response.json()
    setUser(responseJSON)
  }

//hook que permite tomar del ciclo de vida y ejecutarlo por una vez al iniciar la app
  useEffect(() => {
    fetchApi()
  }, [])
  
return (
  <React.Fragment>
    <div className="App">
    <h1 className='Title'>Summarket</h1>
    <SideBar />
{/*     
    { !user ? 'Cargando..' : 
      user.map( (user,index)=> {
        return <span key={index}>{user.user_id} {user.completed ? 'OK': 'NO'}</span>
      })
    } */}
    

    {/* prueba cargando de API listado de tareas */}
    {/* <ul>
    { !todos ? 'Cargando...' : 
      todos.map( (todo,index)=> {
        return <li key={index}>{todo.title} {todo.completed ? 'OK': 'NO'}</li>
      })
    }
    </ul> */}
    </div>
  </React.Fragment>
  );
}

export default App;
