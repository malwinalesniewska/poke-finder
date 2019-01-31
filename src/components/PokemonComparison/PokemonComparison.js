import React from 'react';
import './_PokemonComparison.scss'

class PokemonComparison extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: '',
            pokemon2: '',
            shouldRender1: false,
            shouldRender2: false
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
                <div className='pokemon_comparison'>
                    <div className='first_pokemon'>
                        <h2 style={{textTransform: 'uppercase'}}>{pokemon1.name}</h2>
                        <img src={pokemon1.sprites.front_default} alt='pokemon1_img'/>
                        <p className='poke_types'> {pokemon1.types.length > 1 ? 'Types: ' : 'Type: ' }
                            {pokemon1.types.map((elem, index) => {
                                return <span className='pokemon_type' key={index} style={{textTransform: 'uppercase'}}>{elem.type.name}&nbsp;</span>
                            })}
                        </p>
                        <p>Base experience: {pokemon1.base_experience}</p>
                    </div>
                    <div className='second_pokemon'>
                        <h2 style={{textTransform: 'uppercase'}}>{pokemon2.name}</h2>
                        <img src={pokemon2.sprites.front_default} alt='pokemon2_img'/>
                        <p className='poke_types'> {pokemon2.types.length > 1 ? 'Types: ' : 'Type: ' }
                            {pokemon2.types.map((elem, index) => {
                                return <span className='pokemon_type' key={index} style={{textTransform: 'uppercase'}}>{elem.type.name}&nbsp;</span>
                            })}
                        </p>
                        <p>Base experience: {pokemon2.base_experience}</p>
                    </div>
                    <div className='stats_list'>
                        <table>
                            <thead>
                            <tr>
                                <td style={{textAlign: 'left'}}>Name</td>
                                <td>Base <br/>{pokemon1.name}</td>
                                <td>Base <br/>{pokemon2.name}</td>
                                <td >Effort <br/>{pokemon1.name}</td>
                                <td >Effort <br/>{pokemon2.name}</td>
                            </tr>
                            </thead>
                            {pokemon1.stats.map((poke1, index) =>
                                <tbody key={index}>
                                <tr>
                                    <td style={{textAlign: 'left'}}>{poke1.stat.name}</td>
                                    <td>{poke1.base_stat}</td>
                                    {pokemon2.stats.map((poke2, index) =>
                                        <td key={index}>{poke2.base_stat}</td>
                                    )}
                                    <td>{poke1.effort}</td>
                                    {pokemon2.stats.map((poke2, index) =>
                                        <td key={index}>{poke2.effort}</td>
                                    )}
                                </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            )
        } else {
           return <div>Loading...</div>
        }
    }

}

export default PokemonComparison