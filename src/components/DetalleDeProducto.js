import React from "react";
import { Component } from "react/cjs/react.production.min";


class DetalleDeProducto extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            idPrd: '',
            nombre: '',
            descripcion: '',
           lineas: '',
            precio: '',
            bonif: '',
            cantidad: '',
            //foto: ''
        };
        
    }

    componentDidMount() {
        
        fetch("/api/products")
          .then((res) => res.json())
          .then((data) => 
          this.setState(
              {
                  idPrd: data.data[8].idPrd,
                  nombre: data.data[8].nombre,
                  descripcion: data.data[8].descripcion,
                  lineas: data.data[8].lineas,
                  precio: data.data[8].precio,
                  bonif: data.data[8].bonif,
                  cantidad: data.data[8].cantidad,
                  //foto: data.data[8].foto


              }  ))

          .catch( error => console.log( error ));

    }

    render() {

        return(
            <React.Fragment>
                <div>
                    <h3>Detalle de Producto</h3>
                    <ul>
                        <li><strong>idPrd: </strong>{this.state.idPrd}</li> 
                        <li><strong>Nombre: </strong>{this.state.nombre}</li>
                        <li><strong>Descripción: </strong>{this.state.descripcion}</li>
                        <li><strong>Línea: </strong>{this.state.lineas}</li>
                        <li><strong>Precio: </strong>{this.state.precio}</li>
                        <li><strong>Bonificación</strong>{this.state.bonif}</li>
                        <li><strong>Stock: </strong>{this.state.cantidad}</li>
                     
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}
export default DetalleDeProducto;
