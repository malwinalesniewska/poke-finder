import React, {Fragment} from 'react';
import './_PokemonComparison.scss';
import {Link} from "react-router-dom";

class PokemonComparison extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: '',
            pokemon2: '',
            shouldRender1: false,
            shouldRender2: false,
            onMouseEnter: false
        }
    }

    componentDidMount() {
        this.getFirstPokemon();
        this.getSecondPokemon();
    }

    getFirstPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId1}`).then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                }).then(data1 => {
                this.setState({
                    pokemon1: data1,
                    shouldRender1: true
                });
        });
    };

    getSecondPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId2}`).then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                }).then(data2 => {
                this.setState({
                    pokemon2: data2,
                    shouldRender2: true
                });
        });
    };


    render() {
        const {pokemon1, pokemon2, shouldRender1, shouldRender2} = this.state;
        if (!shouldRender1 && !shouldRender2) {
            return <div id='loadingScreen'>Loading...</div>;
        }
        if (shouldRender1 && shouldRender2) {
            return (
                <Fragment>
                    <Link to={'/'}>
                        <button className='back_btn'>BACK</button>
                    </Link>
                    <div className='pokemon_comparison'>
                        <div className='first_pokemon'>
                            <h2 style={{textTransform: 'uppercase'}}>{pokemon1.name}</h2>
                            {pokemon1.sprites.front_default !== null ? (<img src={pokemon1.sprites.front_default} alt='pokemon1_img'/>)
                                :  <div/>}
                            <p className='poke_types'> {pokemon1.types.length > 1 ? 'Types: ' : 'Type: ' }
                                {pokemon1.types.map((elem, index) => {
                                    return <span className='pokemon_type' key={index} style={{textTransform: 'uppercase'}}>{elem.type.name}&nbsp;</span>
                                })}
                            </p>
                            <p>Base experience: {pokemon1.base_experience}</p>
                        </div>
                        <div className='second_pokemon'>
                            <h2 style={{textTransform: 'uppercase'}}>{pokemon2.name}</h2>
                            {pokemon2.sprites.front_default !== null ? (<img src={pokemon2.sprites.front_default} alt='pokemon1_img'/>)
                                :  <div/>}
                            <p className='poke_types'> {pokemon2.types.length > 1 ? 'Types: ' : 'Type: ' }
                                {pokemon2.types.map((elem, index) => {
                                    return <span className='pokemon_type' key={index} style={{textTransform: 'uppercase'}}>{elem.type.name}&nbsp;</span>
                                })}
                            </p>
                            <p>Base experience: {pokemon2.base_experience}</p>
                        </div>
                        <div className='stats_list'>
                            <table className='stats_table'>
                                <thead>
                                    <tr>
                                        <td>STATS</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pokemon1.stats.map((poke1, index) =>
                                        <tr>
                                            <td key={index}>{poke1.stat.name}</td>
                                        </tr>)}
                                </tbody>
                            </table>
                            <table className='table_one'>
                                <thead>
                                <tr>
                                    <td>Base<br/><span>{pokemon1.name}</span></td>
                                    <td>Effort<br/><span>{pokemon1.name}</span></td>
                                </tr>
                                </thead>
                                <tbody>
                                {pokemon1.stats.map((poke1, index) =>
                                    <tr key={index}>
                                        <td>{poke1.base_stat}</td>
                                        <td>{poke1.effort}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <table className='table_two'>
                                <thead>
                                <tr>
                                    <td>Base<br/><span>{pokemon2.name}</span></td>
                                    <td>Effort<br/><span>{pokemon2.name}</span></td>
                                </tr>
                                </thead>
                                {pokemon2.stats.map((poke2, index) =>
                                    <tbody>
                                    <tr key={index}>
                                        <td>{poke2.base_stat}</td>
                                        <td>{poke2.effort}</td>
                                    </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
           return <div>Loading...</div>
        }
    }

}

export default PokemonComparison