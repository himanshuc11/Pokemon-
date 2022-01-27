import React from 'react';

const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

function Pokemon(props) {
    return (
        <div>
            <img src={url + props.id + ".png"}  />
            <h4>{props.name}</h4>
            <p>{props.type}</p>
            <p>{props.base_experience}</p>
        </div>
    )
}

export default Pokemon;
