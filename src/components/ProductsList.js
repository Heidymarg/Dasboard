import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class ProductsList extends Component {

	constructor(){

		super();

		this.state = { listadeProductos : [] };
	}

	componentDidMount() {

		fetch("/api/products")
			  .then((response) => response.json())
			  .then((productos) => this.setState( {listadeProductos : productos.data }))
			  .catch( error => console.log( error )
		);
	}
/*
function UsersList() {

	const [listadeUsuarios, setListaDeUsuarios] = useState();
		
	 useEffect(() => {
        fetch("/api/users")
          .then((response) => response.json())
          .then((usuarios) => setListaDeUsuarios( usuarios.data ));
    }, []);
*/
	render() {
		return(

			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">Todos los Productos Cargados</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>ID</th>
												<th>Nombre</th>
												<th>Descripción</th>
												<th>Línea</th>
												<th>Detalle</th>
											</tr>
										</thead>
										<tbody>
											{/* { listadeUsuarios.map( (usuario ) =>  */}
											{this.state.listadeProductos.map( (producto ) => 
											
												<tr>
													<td>
														{producto.idPrd}
													</td>
													<td>
														{producto.nombre}
													</td>
													<td>
														{producto.descripcion}
													</td>
													<td>
														{producto.lineas}
													</td>
													<td>
														{<Link to={producto.detalle}>Detalle</Link>}
														{/* {<a href={usuario.detalle}>Detalle</a>} */}
													</td>
												</tr>
	 										 ) } 
											
										</tbody>
										<tfoot>
											<tr>
                                            <th>ID</th>
												<th>Nombre</th>
												<th>Descripción</th>
												<th>Línea</th>
												<th>Detalle</th>
											</tr>
										</tfoot>
										
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		);
	}	

}
export default ProductsList;