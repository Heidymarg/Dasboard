import React, {Component, useState, useEffect} from 'react';

import {Link} from 'react-router-dom';


class UsersList extends Component {

	constructor(){

		super();

		this.state = { listadeUsuarios : [] };
	}

	componentDidMount() {

		fetch("/api/users")
			  .then((response) => response.json())
			  .then((usuarios) => this.setState( {listadeUsuarios : usuarios.data }))
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
						<h1 className="h3 mb-2 text-gray-800">Todos los Usuarios Registrados</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>ID</th>
												<th>Nombre</th>
												<th>E-Mail</th>
												<th>Perfil</th>
												<th>Detalle</th>
											</tr>
										</thead>
										<tbody>
											{/* { listadeUsuarios.map( (usuario ) =>  */}
											{this.state.listadeUsuarios.map( (usuario ) => 
											
												<tr>
													<td>
														{usuario.id}
													</td>
													<td>
														{usuario.usuario}
													</td>
													<td>
														{usuario.email}
													</td>
													<td>
														{usuario.perfil}
													</td>
													<td>
														{<Link to="/detalle/:id">Detalle</Link>}
														{/* {<a href={usuario.detalle}>Detalle</a>} */}
													</td>
												</tr>
	 										 ) } 
											
										</tbody>
										<tfoot>
											<tr>
												<th>ID</th>
												<th>Nombre</th>
												<th>E-Mail</th>
												<th>Perfil</th>
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
export default UsersList;