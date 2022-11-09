import React from 'react';
import imagenFondo from '../assets/images/VenCar.jpg';
import imagenFondo2 from '../assets/images/iphone.jpg';
import imagenFondo3 from '../assets/images/bicicleta.jpg';


import Category from './Category';
import ContentRowTablas from './ContentRowTablas';


function Carousel(){
    return(
        <React.Fragment>


									{/* Inicio carousel */}
									<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
										<div className="carousel-inner">
											<div className="carousel-item active">
											<img className="d-block w-100 img-fluid" src={imagenFondo2} alt="First slide" />
											</div>
											<div className="carousel-item">
											<img className="d-block w-100 img-fluid" src={imagenFondo2} alt="Second slide" />
											</div>
											<div className="carousel-item">
											<img className="d-block w-100 img-fluid" src={imagenFondo3} alt="Third slide" />
											</div>
										</div>
										<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
											<span class="carousel-control-prev-icon" aria-hidden="true"></span>
											<span class="sr-only">Previous</span>
										</a>
										<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
											<span class="carousel-control-next-icon" aria-hidden="true"></span>
											<span class="sr-only">Next</span>
										</a>
									</div>
									{/* Fin carousel */}

        </React.Fragment>
    )

}
export default Carousel;