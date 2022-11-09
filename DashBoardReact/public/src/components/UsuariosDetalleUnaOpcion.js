
import React from 'react';



function UsuariosDetalle ({id, firstName}){
	
		return(
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
					<h6 className="m-0 font-weight-bold text-gray-800">Todos los autos en la base de datos</h6>
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>eamil</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>eamil</th>
									</tr>
								</tfoot>

								<tbody>
								{
								
										<tr>
											<td> {id}</td>
											<td> {firstName} </td>
											<td> Campo 3 </td>
										</tr>
											
								}
								</tbody>

							</table>
						</div>
					</div>
				</div>	
			</React.Fragment>
		)
	
}

export default UsuariosDetalle;