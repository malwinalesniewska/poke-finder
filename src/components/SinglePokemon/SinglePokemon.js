import React from 'react';
import './_SinglePokemon.scss';
import {Link} from "react-router-dom";

const SinglePokemon = ({pokemon}) => {

    const splitedUrl = pokemon.url.split("/");
    const pokemonId = splitedUrl[splitedUrl.length - 2];
    return (
        <li className='singlePokemon' style={{textTransform: 'uppercase'}}>
            <Link to={`/pokemon/${pokemonId}`}>{pokemon.name}</Link>
        </li>
    )

};

export default SinglePokemon;

