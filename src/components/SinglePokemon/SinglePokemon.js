import React from 'react';
import './_SinglePokemon.scss';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import CompareInput from '../CompareInput/CompareInput'

const SinglePokemon = ({pokemon, checkPokemon}) => {

    const splitedUrl = pokemon.url.split("/");
    const pokemonId = splitedUrl[splitedUrl.length - 2];
    return (
        <li className='singlePokemon' style={{textTransform: 'uppercase'}}>
            <Link to={`/pokemon/${pokemonId}`}>{pokemon.name}</Link>
            <CompareInput pokemonId={pokemonId} checkPokemon={checkPokemon}/>
        </li>
    )

};

SinglePokemon.propTypes = {
    pokemon: PropTypes.object
};

export default SinglePokemon;

