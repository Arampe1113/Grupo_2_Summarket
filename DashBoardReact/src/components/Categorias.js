
// import React, {Component} from 'react';
// import CategoryList from './CategoryList';

// class Category extends Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			lista1: []
// 		}
// 	}

// 	componentDidMount() {
// 		fetch('http://localhost:3001/api/marcas')
// 		.then(respuesta1 => {
// 			return respuesta1.json()    
// 		})

// 		.then(respuesta2 =>{
// 			console.log(respuesta2)
// 			this.setState({lista1: respuesta2.data})
// 		})

// 		.catch(error => console.log(error))
// 	}

// 	render(){
// 		return(
// 			<React.Fragment>
// 				{/*<!-- Categories in DB -->*/}
// 				<div className="col-lg-6 mb-4">						
// 					<div className="card shadow mb-4">
// 						<div className="card-header py-3">
// 							<h2	className="h4 m-0 font-weight-bold text-gray-800">
// 						Marcas
// 						<li>

// 						</li>
// 							</h2>
// 						</div>
// 						<div className="card-body">
// 							<div className="row">

// 								{
// 									this.state.lista1.map((elemento,index)=>{
// 										//Aqui CategoryList hace referencia al nombre en la linea 3 después de import (debe ser el mismo)
// 										return <CategoryList 
// 											key={index}
// 											id={elemento.id}
// 											Category={elemento.Category}
// 											/>
// 									})
// 								}

// 							</div>
//                         </div>
//                     </div>
//                 </div>


// 			</React.Fragment>
// 		)
// 	}
// }

// export default Category;




import React, { Component } from 'react';
import MarcasList from './CategoryList';


class Marcas extends Component{
	constructor(){
		super();
		this.state = {
			lista1: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3030/api/v1/marcas/')
		.then(respuesta1 => {
			return respuesta1.json()    
		})

		.then(respuesta2 =>{
			console.log(respuesta2)
			this.setState({lista1: respuesta2.data})
		})

		.catch(error => console.log(error))
	}

	render(){
		return(
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}

				{/*<!-- DataTales Example -->*/}

				<div className="card shadow mb-4">
					<div className="card-header py-3">
							<h2	className="h4 m-0 font-weight-bold text-gray-800">
							{
										this.state.lista1.map((elemento, brand)=>{
											//Aqui ProductsList hace referencia al nombre en la linea 3 después de import (debe ser el mismo)
											return <MarcasList
												Marcas={elemento.brand}
												/>
										})
									}
							</h2>
					</div>
					<div className="card-body">

						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>marca</th>
									</tr>
								</thead>
								<tbody>		
									<li>Nike</li>	
										<li> Lenovo </li>	
											<li> Samsung </li>	
											<li> Yamaha</li>	
											<li>GW</li>	



								</tbody>

							</table>
						</div>
					</div>
				</div>            
			</React.Fragment>

		)
	}
}

export default Marcas;




// SEGUNDO INTENTO 

// import React, { useEffect, useState } from 'react';
// import MarcasList from './CategoryList';

// const Marcas = () => {
// const [brand, setmarca] = useState([])




// const fetchMarcasData =() => {
// 	fetch('http://localhost:3030/api/v1/marcas/')
// 		.then(response => {
// 			return response.json()
// 		})
// 		.then(response => {
// 			console.log(response.data)
// 			setmarca(response.data)
// 		})
// 	}

// useEffect(() =>{
// 	fetchMarcasData()
	

// }, [])

// return (

// 	<div> Marcas: 
// 		<ul> Producto:  {response.length >= 0 ? (<p>{response[0]?.brand}</p>): (<li></li>)}  </ul>

		 
// 		{brand.lengh > 0 && (
// 			<ul>
// 				{brand.map(brand => (
// 					<li key={brand.idbrand}>{brand.brand} Marcas:{brand.brand} </li>
// 				))}
// 			</ul>
// 		)}
// 	</div>
// );
// 				}
	
// export default Marcas;


// SEGUNDO INTENTO 



// TERCER INTENTPO 

// import React, { Component } from 'react';
// import UltimoElemento from './UltimoElementolist';
// import MarcasList from './CategoryList';



// class Marcas extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			lista1: [],
// 		}
// 	}

// 	// componentDidMount() {

// 		/* Usuarios
// 		fetch('http://localhost:3030/api/v1/users')
// 		.then(respuesta1 => {
// 			return respuesta1.json()    
// 		})

// 		.then(respuesta2 =>{
// 			console.log(respuesta2)
// 			this.setState({lista1: respuesta2.data})
// 		})
	
// 		.catch(error => console.log(error))
// 		*/

// 		// Autos
// 		componentDidMount() {
// 			fetch('http://localhost:3030/api/v1/marcas')
// 			.then(respuesta1 => {
// 				return respuesta1.json()    
// 			})
	
// 			.then(respuesta2 =>{
// 				console.log(respuesta2)
// 				this.setState({lista1: respuesta2.data})
// 			})
		
// 			.catch(error => console.log(error))
// 		}


// 		// Marcas
// 		// fetch('http://localhost:3001/api/marcas')
// 		// .then(respuesta1 => {
// 		// 	return respuesta1.json()    
// 		// })

// 		// .then(respuesta2 =>{
// 		// 	console.log(respuesta2)
// 		// 	this.setState({lista3: respuesta2.data})
// 		// })

// 		// .catch(error => console.log(error))

// 	// }
// 	// componentDidUpdate() {

// 	// }

// 	render() {
// 		const { lista1 } = this.state
// 		console.log(lista1);

// 		// const{cantUsuarios} =lista1.length

// 		// const{usuarios}= []
// 		// const{autos}=[]
// 		// const{marcas}=[]
// 		// const {cardProps} = [usuarios,autos,marcas];

// 		return (
// 			<div

//       style={{
//         padding: 40,
//         textAlign: "left",
//         color: "#3c3a2d"
		
//       }}
//     >
//       <h1
//         style={{
//           fontSize: 30,
//           fontWeight: 900
//         }}
//       > </h1>
// 			<React.Fragment>
// 				<div className="row">
// 				{/* {
// 									lista1.map((lista1)=>(
// 										<tr>
// 											<td>{lista1.brand}</td>


// 										</tr>
// 										)
// 									)
		
// 								} */}

// {
// 										this.state.lista1.map((elemento,index)=>{
// 											//Aqui ProductsList hace referencia al nombre en la linea 3 después de import (debe ser el mismo)
// 											return <MarcasList 
// 												key={index}
// 												id={elemento.idbrand}
// 												brand={elemento.brand}

// 												/>
// 										})
// 									}	



// 					{/* <SmallCard
// 					Nombre={lista1[lista2.name]}
// 						Descripcion={lista2[0]?.name || 'No estoy actualizando'}
// 						Precio={lista3.length}
// 					/> */}


// 				<tr> 
// 					<ul> Marcas:  {lista1.length >= 0 ? (<p>{lista1[0]?.brand}</p>): (<li></li>)}  </ul> 
// 					</tr>



// 				</div>

// 			</React.Fragment>
// 			</div>

// 		)
// 	}
// }

// export default Marcas;



// TERCER INTENTPO 
