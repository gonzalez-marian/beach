import React from 'react';

const BeachSearch = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div className="wrapper">
            <form>
                <label>Buscar Playa: </label>
                <input type="text" onChange={handleChange} name="beach" value={props.value} placeholder="Ej: La Juana" />
            </form>
        </div>
    )
}

export default BeachSearch;