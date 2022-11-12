
import React from 'react';



function UltimoElemento ({id, name, description}){
	
		return(
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
					<h6 className="m-0 font-weight-bold text-gray-800">Ultimo Elemento Agregado</h6>
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>descripcion</th>
									</tr>
								</thead>
							

								<tbody>
								{
								
										<tr>
											<td> {id}</td>
											<td> {name} </td>
                                            <td> {description} </td>
										
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

export default UltimoElemento;