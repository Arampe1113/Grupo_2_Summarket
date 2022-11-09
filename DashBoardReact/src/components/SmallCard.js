import React from 'react';

function SmallCard({cantUsuarios, cantPro, cantMarcas}){
    return(
        <React.Fragment>

                 {/* Usuarios */}
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total de usuarios</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800"> {cantUsuarios}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-user fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Autos */}
                <div className={`card border-left-success shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-success text-uppercase mb-1`}> Total de Productos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800"> {cantPro}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-award fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* Marcas */}
                <div className={`card border-left-warning shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}> Total de marcas</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800"> {cantMarcas}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-film fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>


        </React.Fragment>
    )
}
export default SmallCard;