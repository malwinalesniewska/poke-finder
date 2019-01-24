import React from 'react';
import './_PokemonList.scss'
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import PropTypes from "prop-types";

const PokemonList = ({pokemons, children}) => (
        pokemons.length > 0 ? (
            <ul className='pokemons'>
                {pokemons.map((pokemon, index) => (
                    <SinglePokemon key={index} pokemon={pokemon} index={index} />

                ))}
                {children}
            </ul>

        ) : (
            <div className='pkmns_not_found'>
                <span>Pokemons not found</span>
                <div className='mad_pikachu'/>
            </div>
        )
);

PokemonList.propTypes = {
    pokemons: PropTypes.array
};


export default PokemonList;