// import React, {useState, useEffect} from 'react';
import React from 'react';
import '../App.css';

function App() {

// llamar a una API de listados
const url = 'http://localhost:3030/api/v1/products'
//const url = 'https://jsonplaceholder.typicode.com/todos/'

//hook para ver estados
  // const [todos, setTodos] = useState()
  // const fetchApi = async () => {
  //   const response = await fetch(url)
  //   const responseJSON = await response.json()
  //   setTodos(responseJSON)
  // }

//hook que permite tomar del ciclo de vida y ejecutarlo por una vez al iniciar la app
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  
return (
    <div className="App">
    <h1 className='Title'>Summarket</h1>

    {/* prueba cargando de API listado de tareas */}
    {/* <ul>
    { !todos ? 'Cargando...' : 
      todos.map( (todo,index)=> {
        return <li key={index}>{todo.title} {todo.completed ? 'OK': 'NO'}</li>
      })
    }
    </ul> */}



    </div>
  );
}


export default App;
