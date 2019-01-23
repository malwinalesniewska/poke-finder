import React from 'react';
import './_PokemonList.scss'
import SinglePokemon from "../SinglePokemon/SinglePokemon";

const PokemonList = ({pokemons, children}) => (
        pokemons.length > 0 ? (
            <ul className='pokemons'>
                {pokemons.map((pokemon, index) => (
                    <SinglePokemon key={index} pokemon={pokemon} index={index} />

                ))}
                {children}
            </ul>
        ) : (
            <div>Pokemons not found</div>
        )
);


export default PokemonList;