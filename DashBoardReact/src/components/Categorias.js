
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




import React, {Component} from 'react';
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