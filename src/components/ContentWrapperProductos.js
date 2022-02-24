import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

/* sprint 8 */
import ContentRowProducto from './ContentRowProducto'
import ProductsList from './ProductsList';
/* Fin sprint 8 */


function ContentWrapperProductos(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowProducto />
                    <ProductsList />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapperProductos;