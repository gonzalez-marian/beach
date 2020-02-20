import React from 'react';
import BeachCard from './BeachCard';
import { Link } from 'react-router-dom';

const BeachList = props => {
    return (
        < div >
            <img src="../images/imagen_fondo.jpg" alt="playa" />
            <ul>
                {props.allBeaches
                    .filter(beach => beach.attributes.Nombre.toLowerCase().includes(props.value.toLowerCase()))
                    .map(beach => <li key={props.beachCod}>
                        <Link to={`/beach/${beach.attributes.OBJECTID}`}>
                            <BeachCard
                                beachName={beach.attributes.Nombre}
                                beachComunity={beach.attributes.Comunidad_}
                                beachProvince={beach.attributes.Provincia}
                                beachCod={beach.attributes.OBJECTID}
                            />
                        </Link>
                    </li>
                    )}
            </ul>
        </div >
    )
}

export default BeachList;