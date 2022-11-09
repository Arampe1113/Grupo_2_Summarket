
import React, {Component} from 'react';
import UsuariosDetalle from './UsuariosDetalle';


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
					<div className="card-body">
					<h6 className="m-0 font-weight-bold text-gray-800">Todos los usuarios en la base de datos</h6>
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>eamil</th>
										<th>Ver Detalle</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>eamil</th>
										<th>Ver Detalle</th>
									</tr>
								</tfoot>

								<tbody>
								{
									lista1.map((elemento)=>(
										<tr>
											<td>{elemento.id}</td>
											<td>{elemento.firstName}</td>
											<td>{elemento.email}</td>
											
											<td>
												
													<button type="button" className="btn btn-info"
													return <UsuariosDetalle>
														id={elemento.id}
														firstName={elemento.firstName}
													/>
													Ver Detalle
													</button>
												
                							</td>
										




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