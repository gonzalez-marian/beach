import React from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const BeachInfo = props => {
    if (props.beaches === undefined) {
        return <Loader />
    } else {
        // console.log(props.beaches.attributes.Imagen)
        return (
            <div>
                <Link className="go__back" to="/">
                    {"< Volver a Inicio"}
                </Link>
                <div>
                    <ul>
                        <img src={props.beaches.attributes.Imagen} alt={props.beaches.attributes.Nombre} />
                        <h2>Playa: {props.beaches.attributes.Nombre}</h2>
                        <li>Comunidad: {props.beaches.attributes.Comunidad_}</li>
                        <li>Provincia: {props.beaches.attributes.Provincia}</li>
                        <li>Isla: {props.beaches.attributes.Isla}</li>
                        <li>Web Municipal: {props.beaches.attributes.Web_munici}</li>
                        <li>Descripción: {props.beaches.attributes.Descripció}</li>
                        <li>Paseo Marítimo: {props.beaches.attributes.Paseo_marí}</li>
                        <li>Condiciones: {props.beaches.attributes.Condicione}</li>
                        <li>Acceso Discapacitados: {props.beaches.attributes.Acceso_dis}</li>
                        <li>Carretera más próxima: {props.beaches.attributes.Carretera_}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BeachInfo;