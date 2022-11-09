
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import UsuariosDetalle from './UsuariosDetalle';


class Usuarios extends Component{
	constructor(){
		super();
		this.state = {
			lista1: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3030/api/v1/users')
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
		const{lista1}=this.state
		

		return(
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-header py-3">
							<h2	className="h4 m-0 font-weight-bold text-gray-800">
							Todos los usuarios en la base de datos
							</h2>
					</div>
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>eamil</th>
										
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>eamil</th>
										
									</tr>
								</tfoot>

								<tbody>
								{
									lista1.map((elemento)=>(
										<tr>
											<td>{elemento.id}</td>
											<td>{elemento.firstName}</td>
											<td>{elemento.lastName}</td>
											<td>{elemento.email}</td>
											
					




										</tr>
										)
									)
		
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

export default Usuarios;