import React from "react";
import { Component } from "react/cjs/react.production.min";


class DetalleDeUsuario extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            id: '',
            nombre: '',            
            email: '',
            perfil: '',
            

        }
        
    }

    componentDidMount() {
        //fetch("/api/users/" + this.props.match.params.id)
        //fetch("/api/users/" + this.props)
        fetch("/api/users")
          .then((res) => res.json())
          .then((data) => this.setState( { 
              id: data.data[3].id,
              usuario: data.data[3].usuario,
              email: data.data[3].email,
              perfil: data.data[3].perfil,
              //foto: data.data[3].foto
          } ))

          .catch( error => console.log( error ));

    }

    render() {

        return(
            <React.Fragment>
                <div>
                    <h3>Detalle de Usuario</h3>
                    <ul>
                        <li><strong>Id: </strong> {this.state.id}</li> 
                        <li><strong>Usuario: </strong>{this.state.usuario}</li>
                        <li><strong>E-mail: </strong>{this.state.email}</li>
                        <li><strong>Perfil: </strong>{this.state.perfil}</li>
                      
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}
export default DetalleDeUsuario;