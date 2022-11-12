
import React, { Component } from 'react';
import UltimoElemento from './UltimoElementolist';



class Lastproduct extends Component {
	constructor() {
		super();
		this.state = {
			lista1: [],
			lista2: [],
			lista3: [],
		}
	}

	componentDidMount() {

		/* Usuarios
		fetch('http://localhost:3030/api/v1/users')
		.then(respuesta1 => {
			return respuesta1.json()    
		})

		.then(respuesta2 =>{
			console.log(respuesta2)
			this.setState({lista1: respuesta2.data})
		})
	
		.catch(error => console.log(error))
		*/

		// Autos
		fetch('http://localhost:3030/api/v1/products')
			.then(respuesta1 => {
				return respuesta1.json()
			})

			.then(respuesta2 => {
				const response = respuesta2.data.reverse().filter((item, idx) => idx === 0)
				this.setState({ lista2: response })
			})

			.catch(error => console.log(error))


		// Marcas
		// fetch('http://localhost:3001/api/marcas')
		// .then(respuesta1 => {
		// 	return respuesta1.json()    
		// })

		// .then(respuesta2 =>{
		// 	console.log(respuesta2)
		// 	this.setState({lista3: respuesta2.data})
		// })

		// .catch(error => console.log(error))

	}
	componentDidUpdate() {

	}

	render() {
		const { lista1 } = this.state
		const { lista2 } = this.state
		const { lista3 } = this.state
		console.log(lista2);

		// const{cantUsuarios} =lista1.length

		// const{usuarios}= []
		// const{autos}=[]
		// const{marcas}=[]
		// const {cardProps} = [usuarios,autos,marcas];

		return (
			<div

      style={{
        padding: 40,
        textAlign: "left",
        color: "#3c3a2d"
		
      }}
    >
      <h1
        style={{
          fontSize: 30,
          fontWeight: 900
        }}
      > </h1>
			<React.Fragment>
				<div className="row">
				{
									lista1.map((lista2)=>(
										<tr>
											<td>{lista2.name}</td>
											<td>{lista2.firstName}</td>
											<td>{lista2.lastName}</td>
											<td>{lista2.email}</td>
											
					




										</tr>
										)
									)
		
								}


					{/* <SmallCard
					Nombre={lista1[lista2.name]}
						Descripcion={lista2[0]?.name || 'No estoy actualizando'}
						Precio={lista3.length}
					/> */}


				<tr> <h2> Ultimo Elemento Agregado:
					
					 </h2>

					<ul> Producto:  {lista2.length >= 0 ? (<p>{lista2[0]?.name}</p>): (<li></li>)}  </ul> 
					<ul> Descripción:  {lista2.length >= 0 ? (<p>{lista2[0]?.  description}    </p>) : (<li></li>)}</ul> 
					<ul> {lista2.length >= 0 ? (<p>{lista2[0]?.  color}</p>) : (<li></li>)}</ul> 
					<ul> Precio: {lista2.length >= 0 ? (<p>{lista2[0]?.  price}</p>) : (<li></li>)} </ul> 
					</tr>



				</div>

			</React.Fragment>
			</div>

		)
	}
}

export default Lastproduct;

