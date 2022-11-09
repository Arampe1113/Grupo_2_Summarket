import React from 'react';
import imagenFondo from '../assets/images/iphone.jpg';
import Marcas from './Categorias';
import ContentRowTablas from './ContentRowTablas';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">

				
					{/*<!-- Content Row Autos -->*/}
					<ContentRowTablas />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Ultimo vehículo de la Base de datos -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h2 className="h4 m-0 font-weight-bold text-gray-800">El producto estrella</h2>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 +'rem'}} src={imagenFondo} alt=" Summarket "/>
									</div>
									<p className='text-center'>Comprale a tu compañero de trabajo</p>
								</div>
							</div>
						</div>
						{/*<!-- End content row Ultimo vehículo de la Base de datos -->*/}

						{/*<!-- Marcas in DB -->*/}
						<Marcas />

						{/*<!--End Marcas In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;