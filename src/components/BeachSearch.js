import React from "react";
import PropTypes from "prop-types";

const BeachSearch = props => {
  const handleChange = evt => {
    props.handleChange(evt.target.value);
  };
  return (
    <div className="form__wrapper" role="search">
      <span className="form__title">Buscar Playa: </span>
      <form className="nice-input-wrapper">
        <input className="nice-input" type="text" onChange={handleChange} name="beach" value={props.value} placeholder={props.placeholder}>
          {props.input}
        </input>
        <span class="focus-border">
          <i></i>
        </span>
      </form>
    </div>
  );
};

BeachSearch.defaultProps = {
  placeholder: "Ej: La Juana"
};

BeachSearch.propTypes = {
  input: PropTypes.string.isRequired
};

export default BeachSearch;
