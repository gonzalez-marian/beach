import React from 'react';

const BeachSearch = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div className="main__wrapper">
            <span className="main__title">Buscar Playa: </span>
            <form className="nice-input-wrapper">
                <input className="nice-input" type="text" onChange={handleChange} name="beach" value={props.value} placeholder="Ej: La Juana" />
                <span class="focus-border"><i></i></span>
            </form>
        </div>
    )
}

export default BeachSearch;