import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

/* sprint 8 */
import ContentRowUsuario from './ContentRowUsuario';
import UsersList from './UsersList';

/* Fin sprint 8 */


function ContentWrapperUsuarios(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowUsuario />
        
                    <UsersList />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapperUsuarios;