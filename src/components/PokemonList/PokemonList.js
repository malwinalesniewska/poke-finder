import React, {Fragment} from 'react';
import './_PokemonList.scss'
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedPokemons: []
        }
    }

    compareButton = pokemonId => {
        if(this.state.checkedPokemons.includes(pokemonId)) {
            this.setState({
                checkedPokemons: this.state.checkedPokemons.filter(id => id!== pokemonId)
            })
        } else if (this.state.checkedPokemons.length < 2) {
            this.setState({
                checkedPokemons: [...this.state.checkedPokemons, pokemonId]
            })
        }
    };

    render() {
        const {pokemons, children} = this.props;
        const {checkedPokemons} = this.state;
        return (
            pokemons.length > 0 ? (
                <Fragment>
                    {checkedPokemons.length === 2 ? (<Link to={`/compare/${checkedPokemons[0]}/${checkedPokemons[1]}`}>
                        <button className='compare_button' onClick={this.compareButton}>COMPARE</button>
                    </Link>) : null}
                    <ul className='pokemons'>
                        {pokemons.map((pokemon, index) => (
                            <SinglePokemon key={index} pokemon={pokemon} index={index} checkPokemon={this.compareButton}/>
                        ))}
                    </ul>
                    {children}
                </Fragment>
            ) : (
                <div className='pkmns_not_found'>
                    <span>Pokemons not found</span>
                    <div className='mad_pikachu'/>
                </div>
            )
        );
    }
}

PokemonList.propTypes = {
    pokemons: PropTypes.array,
    checkedPokemons: PropTypes.array
};

export default PokemonList;