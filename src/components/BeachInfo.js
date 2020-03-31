import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const BeachInfo = props => {
  if (props.beaches === undefined) {
    return <Loader />;
  } else {
    return (
      <div className="wrapper">
        <Link className="go__back" to="/">
          {"< Volver a Inicio"}
        </Link>
        <div className="card__detail--container">
          <img className="card__detail--img" src={props.beaches.attributes.Imagen} alt={props.beaches.attributes.Nombre} />
          <ul className="card__detail--info">
            <h2 className="card__title">{props.beaches.attributes.Nombre}</h2>
            <li>Comunidad: {props.beaches.attributes.Comunidad_}</li>
            <li>Provincia: {props.beaches.attributes.Provincia}</li>
            <li>Municipio: {props.beaches.attributes.Término_Mu}</li>
            <li>{props.beaches.attributes.Isla === "Sí" ? "Isla 🏝" : ""}</li>
            <li>
              <span role="img" aria-label="world">
                🌎
              </span>{" "}
              {props.beaches.attributes.Web_munici}
            </li>
            <li>Descripción: {props.beaches.attributes.Descripció}</li>
            <li>Paseo Marítimo: {props.beaches.attributes.Paseo_marí}</li>
            <li>
              <i class="fas fa-water"></i> {props.beaches.attributes.Condicione}
            </li>
            <li>
              <span role="img" aria-label="way">
                🛣
              </span>{" "}
              {props.beaches.attributes.Carretera_}
            </li>
            <li className="card__subtitle">Hospital mas cercano</li>
            <li>
              <i class="far fa-hospital"></i>: {props.beaches.attributes.Hospital}
            </li>
            <li>
              <span role="img" aria-label="ubication">
                📍
              </span>{" "}
              Dirección: {props.beaches.attributes.Dirección_} ☎️ {props.beaches.attributes.Teléfono_H}
            </li>
            <li className="card__subtitle">Servicios:</li>
            <li>
              {props.beaches.attributes.Duchas === "Sí" ? "Duchas 🚿" : ""} {props.beaches.attributes.Teléfonos === "Sí" ? "Tlf 📞" : ""} {props.beaches.attributes.Aseos === "Sí" ? "Aseos 🚾" : ""}
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default BeachInfo;
