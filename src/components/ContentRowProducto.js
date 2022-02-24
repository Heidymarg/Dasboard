import React from 'react';
import imagenFondo from '../assets/images/foto-1643742922601.PNG';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

/* sprint 8 */
import DetalleDeProducto from './DetalleDeProducto';

/* Fin sprint */

function ContentRowProducto(){
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
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Registrado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										{/* !!!!!!!!!!!! Acá va imagen de Ultimo Producto Cargado - Hacer compomente que chupe de la API !!! */}
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="foto-1643742922601.PNG "/>
									</div>
									{/* !!!!!!!!!!!! Acá va el DETALLE de Ultimo Producto Cargado - Hacer compomente que chupe de la API !!! */}
									<p> </p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle De Producto</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Detalle de un producto seleccionado de "Todos los Productos Cargados" -->*/}
						{/* <GenresInDb /> */}
                        {<DetalleDeProducto id=":id" />}
						

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowProducto;