import React from "react";
import '../css/App.css';

function UsersInDb() {

    return (

      <div className="col-lg-6 mb-4">
        
           <h1>Hola</h1>
        <p>PRUEBA   </p>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Users in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Usuarios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
  
  export default UsersInDb;
  