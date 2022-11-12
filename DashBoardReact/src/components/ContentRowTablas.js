
import React, {Component} from 'react';
import SmallCard from './SmallCard';



class ContentRowTablasXXX extends Component{
	constructor(){
		super();
		this.state = {
			lista1: [],
			lista2: [],
			lista3: [],
		}
	}

	componentDidMount() {

		// Usuarios
		fetch('http://localhost:3030/api/v1/users')
		.then(respuesta1 => {
			return respuesta1.json()    
		})

		.then(respuesta2 =>{
			console.log(respuesta2)
			this.setState({lista1: respuesta2.data})
		})
	
		.catch(error => console.log(error))


		// Autos
		fetch('http://localhost:3030/api/v1/products')
		.then(respuesta1 => {
			return respuesta1.json()    
		})

		.then(respuesta2 =>{
			console.log(respuesta2)
			this.setState({lista2: respuesta2.data})
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

	render(){
		const{lista1}=this.state
		const{lista2}=this.state
		const{lista3}=this.state

		// const{cantUsuarios} =lista1.length

		// const{usuarios}= []
		// const{autos}=[]
		// const{marcas}=[]
		// const {cardProps} = [usuarios,autos,marcas];

		return(
			<React.Fragment>
				<div className= "row">
					<SmallCard
						cantUsuarios={lista1.length}
						cantProduct={lista2.length}
						// cantMarcas={lista3.length}
					/>
					
				</div>

			</React.Fragment>
			
		)
	}
}

export default ContentRowTablasXXX;