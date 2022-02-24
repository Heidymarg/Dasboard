import React from 'react';

/* sprint 8 */
import ContentWrapperUsuarios from './ContentWrapperUsuarios';
import ContentWrapperProductos from './ContentWrapperProductos';
/* Fin sprint 8 */


function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentWrapperUsuarios />
                    <ContentWrapperProductos />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;