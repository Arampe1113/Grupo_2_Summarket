import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import Usuarios from './Usuarios';
import Products from './Products';
import ContentRowTop from './ContentRowTop';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">



                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Tablero - Summarket</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/* **************************************************************************************** */}

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Usuarios">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Products">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowTop">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos y detalles </span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route exact path="/Usuarios">
                    <Usuarios />
                </Route>


                {/* 
                <Route path="/Usuarios/:id">
                    <UsuariosDetalle />
                </Route>
                 */}


                <Route path="/Products">
                    <Products />
                </Route>
                <Route path="/ContentRowTop">
                    <ContentRowTop />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;