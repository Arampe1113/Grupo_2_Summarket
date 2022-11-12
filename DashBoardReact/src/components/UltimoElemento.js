
import React, { Component } from 'react';
import SmallCard from './SmallCard';



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
			<React.Fragment>
				<div className="row">

					{/* <SmallCard
						cantUsuarios={lista1[lista1.length-1]}
						cantAutos={lista2[0]?.name || 'No estoy actualizando'}
						cantPro={lista3.length}
					/> */}


				
					{lista2.length >= 0 ? (<h1>{lista2[0]?.name}</h1>) : (<li></li>)}
					{lista2.length >= 0 ? (<h1>{lista2[0]?.description}    </h1>) : (<li></li>)}
					{lista2.length >= 0 ? (<h1>{lista2[0]?.color}    </h1>) : (<li></li>)}
					{lista2.length >= 0 ? (<h1>{lista2[0]?.price}</h1>) : (<li></li>)}

				</div>

			</React.Fragment>

		)
	}
}

export default Lastproduct;


