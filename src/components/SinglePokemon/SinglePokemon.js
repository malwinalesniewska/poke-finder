import React from 'react';
import './_SinglePokemon.scss';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SinglePokemon = ({pokemon}) => {

    const splitedUrl = pokemon.url.split("/");
    const pokemonId = splitedUrl[splitedUrl.length - 2];
    return (
        <li className='singlePokemon' style={{textTransform: 'uppercase'}}>
            <Link to={`/pokemon/${pokemonId}`}>{pokemon.name}</Link>
        </li>
    )

};

SinglePokemon.propTypes = {
    pokemon: PropTypes.object
};

export default SinglePokemon;

