import React from "react";
import BeachCard from "./BeachCard";
import { Link } from "react-router-dom";

const BeachList = props => {
  return (
    <main className="wrapper__list" role="main">
      <ul className="list">
        {props.allBeaches
          .filter(beach => beach.attributes.Nombre.toLowerCase().includes(props.value.toLowerCase()))
          .map(beach => (
            <li className="list__card" key={props.beachCod}>
              <Link to={`/beach/${beach.attributes.OBJECTID}`}>
                <BeachCard beachName={beach.attributes.Nombre} beachComunity={beach.attributes.Comunidad_} beachProvince={beach.attributes.Provincia} beachCod={beach.attributes.OBJECTID} />
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default BeachList;
