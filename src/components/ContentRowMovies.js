import React from 'react';
import { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop() {

    const [totalProductos, setTotalProductos] = useState();
    const [totalLineas, setTotalLineas] = useState();
    const [totalUsuarios, setTotalUsuarios] = useState();

    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((productos) => setTotalProductos( productos.meta.total ));
    }, []);

    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((lineas) => setTotalLineas( lineas.meta.lineas ));
    }, []);

    useEffect(() => {
        fetch("/api/users")
          .then((response) => response.json())
          .then((usuarios) => setTotalUsuarios( usuarios.meta.total ));
    }, []);

    let TotalDeProductos = {
        color:   "primary",
        titulo: "Total de Productos",
        valor: totalProductos,
        icono: "fas fa-award",
    }
    
    let TotalDeLineas ={
        color:   "success",
        titulo: "Total de Líneas",
        valor: totalLineas,
        icono: "fas fa-award",
    }
    
    let TotalDeUsuarios = {
        color:   "warning",
        titulo: "Total de Usuarios",
        valor: totalUsuarios,
        icono: "fas fa-user",
    }
		
    let cardProps = [TotalDeProductos, TotalDeLineas, TotalDeUsuarios];

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((item,index)=>{
                    return <SmallCard  {...item}  key = {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;