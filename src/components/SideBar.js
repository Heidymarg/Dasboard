import React from 'react';
import image from '../assets/images/logo-DH.png';
import logoEcohoney from '../assets/images/logo-prueba-prueba.png'

import { Route, Link, Routes} from 'react-router-dom';

import ContentWrapperUsuarios from './ContentWrapperUsuarios';
import ContentWrapperProductos from './ContentWrapperProductos';
/* sprint 8 */

import ContentWrapper from './ContentWrapper';
import DetalleDeUsuario from './DetalleDeUsuario';
import DetalleDeProducto from './DetalleDeProducto';


/* Fin sprint 8 */

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logoEcohoney} alt="Ecohoney"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <div className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Ecohoney</span></div>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">MENU</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">                  
                    {/* <a className="nav-link collapsed" href="/usuarios"> */}
                        {/* <i className="fas fa-fw fa-folder"></i> */}
                        {/* <span>Usuarios</span> */}
                    {/* </a> */}
                    <Link to="/usuarios"  className="nav-link" > <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span></Link>
                    {/* <Route path="/usuarios" exact={true} component={ContentWrapperUsuarios} /> */}
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/"> */}
                    {/* <i className="fas fa-fw fa-chart-area"></i> */}
                    {/* <span>Productos</span> */}
                    <Link to="/productos" className="nav-link" ><i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span></Link>
                    {/* <Route path="/productos" exact={true} component={ContentWrapperProductos} /> */}
                    {/* </a> */}
                </li>

                {/*<!-- Nav Item - Tables 
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li> -->*/}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

          
            <Routes>
            
            <Route exact path="/" element={ <ContentWrapper />}>  </Route> 
                   
                    
                    <Route exact path="/usuarios" element={ <ContentWrapperUsuarios />}>  </Route> 
                    <Route exact path="/productos" element={ <ContentWrapperProductos />}></Route>
                    <Route exact path="/detalle/:id" element={ <DetalleDeUsuario />}></Route>
                    <Route exact path="/detalle/:id" element={ <DetalleDeProducto />}></Route>
                    
                   
                    
              </Routes>

        </React.Fragment>
    )
}
export default SideBar;