import React from 'react';
import imagenFondo from '../assets/images/hombre-con-barba.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';


/* sprint 8 */
import DetalleDeUsuario from './DetalleDeUsuario';



/* Fin sprint */

function ContentRowUsuario(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Ecohoney Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Ultimo Usuario REgistrado -->*/}
						{/* <User /> */}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario Registrado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										{/* !!!!!!!!!!!! Acá va imagen de Ultimo Usuario Cargado - Hacer compomente que chupe de la API !!! */}
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="hombre-con-barba.jpg "/>
									</div>
									{/* !!!!!!!!!!!! Acá va el DETALLE de Ultimo Usuario Cargado - Hacer compomente que chupe de la API !!! */}
									<p> </p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle De Usuario</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Detalle de Usuario Seleccionado Genres in DB -->*/}
						{/* <GenresInDb /> */}
						{<DetalleDeUsuario id=":id" />}

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}
				
        </React.Fragment>
    )

}
export default ContentRowUsuario;