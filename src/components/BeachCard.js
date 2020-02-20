import React from 'react';

const BeachCard = props => {
    return (
        <li>
            <h3>Playa: {props.beachName}</h3>
            <p>Comunidad: {props.beachComunity}</p>
            <p>Provincia: {props.beachProvince}</p>
        </li>
    )
}

export default BeachCard;