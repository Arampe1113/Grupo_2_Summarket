<React.Fragment>
{/*<!-- Sidebar -->*/}
<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

{/*<!-- Sidebar - Brand -->*/}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div className="sidebar-brand-icon">
    <img className="w-100" src={image} alt="Summarket"/>
    </div>
</a>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider my-0"/>

{/*<!-- Nav Item - Dashboard -->*/}
<li className="nav-item active">
    <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Tablero - Summarket</span></Link>
</li>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider"/>

{/*<!-- Heading -->*/}
<div className="sidebar-heading">Acciones</div>

{/*<!-- Nav Item - Users -->*/}
        <li className="nav-item">
         <Link className="nav-link" to="/UsersInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Usuarios en BD</span></Link>
         </li>

         {/*<!-- Nav Item - Products -->*/}
         <li className="nav-item">
         <Link className="nav-link" to="/ProductsInDb">
         <i className="fas fa-fw fa-folder"></i>
         <span>Productos en BD</span></Link>
         </li>
{/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
       <Link className="nav-link" to="/ContentRowProducts">
       <i className="fas fa-fw fa-table"></i>
       <span>Tablas Usuarios y Productos</span></Link>
       </li>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider d-none d-md-block"/>
</ul>
</React.Fragment>
