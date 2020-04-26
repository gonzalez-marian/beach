import React from "react";

const BeachSelected = (props) => {
  console.log(props.allBeaches);
  const handleSelected = (evt) => {
    props.handleSelected(evt.target);
  };
  return (
    <form>
      <select onChange={handleSelected}>
        {props.allBeaches.map((beach) => (
          <option>{beach.attributes.Comunidad_}</option>
        ))}
      </select>
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default BeachSelected;
