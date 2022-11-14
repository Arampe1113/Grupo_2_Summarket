
import React, {Component} from 'react';
import ProductsList from './ProductsList';

class Products extends Component{
	constructor(){
		super();
		this.state = {
			lista1: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3030/api/v1/products')
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
							Todos los productos en la base de datos
							</h2>
					</div>
					<div className="card-body">
					
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Description</th>
										<th>Color</th>
										<th>Price</th>
									
									</tr>
								</thead>
							

								<tbody>					
									{
										this.state.lista1.map((elemento,index)=>{
											//Aqui ProductsList hace referencia al nombre en la linea 3 después de import (debe ser el mismo)
											return <ProductsList 
												key={index}
												id={elemento.id}
												name={elemento.name}
												description={elemento.description}
												color={elemento.color}
												image={elemento.image}
												precio={elemento.price}
											
												/>
										})
									}									
								</tbody>
								
							</table>
						</div>
					</div>
				</div>            
			</React.Fragment>
		)
	}
}

export default Products;