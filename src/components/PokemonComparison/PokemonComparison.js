import React, {Fragment} from 'react';
import './_PokemonComparison.scss';
import {Link} from "react-router-dom";

class PokemonComparison extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: '',
            pokemon2: '',
            isLoading1: true,
            isLoading2: true
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
                    isLoading1: false
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
                    isLoading2: false
                });
        });
    };


    render() {
        const {pokemon1, pokemon2, isLoading1, isLoading2} = this.state;
        if (isLoading1 && isLoading2) {
            return <div className='loadingScreen'>Loading...</div>;
        }
        if (!isLoading1 && !isLoading2) {
            return (
                <Fragment>
                    <Link to={'/'}>
                        <button className='back_btn'>BACK</button>
                    </Link>
                    <div className='pokemon_comparison'>
                        <div className='first_pokemon'>
                            <h2 style={{textTransform: 'uppercase'}}>{pokemon1.name}</h2>
                            {pokemon1.sprites.front_default !== null ?
                                (<img src={pokemon1.sprites.front_default} alt='pokemon1_img'/>)
                                :  <div/>}
                            <p> {pokemon1.types.length > 1 ? 'Types: ' : 'Type: '}
                                {pokemon1.types.map((elem, index) => {
                                    return <span key={index}
                                                 style={{textTransform: 'uppercase'}}
                                    >{elem.type.name}&nbsp;</span>
                                })}
                            </p>
                            <p>Base experience: {pokemon1.base_experience}</p>
                        </div>
                        <div className='second_pokemon'>
                            <h2 style={{textTransform: 'uppercase'}}>{pokemon2.name}</h2>
                            {pokemon2.sprites.front_default !== null ?
                                (<img src={pokemon2.sprites.front_default} alt='pokemon1_img'/>)
                                :  <div/>}
                            <p> {pokemon2.types.length > 1 ? 'Types: ' : 'Type: '}
                                {pokemon2.types.map((elem, index) => {
                                    return <span key={index}
                                                 style={{textTransform: 'uppercase'}}
                                    >{elem.type.name}&nbsp;</span>
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
                                        <tr key={index}>
                                            <td>{poke1.stat.name}</td>
                                        </tr>)}
                                </tbody>
                            </table>
                            <table>
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
                            <table>
                                <thead>
                                <tr>
                                    <td>Base<br/><span>{pokemon2.name}</span></td>
                                    <td>Effort<br/><span>{pokemon2.name}</span></td>
                                </tr>
                                </thead>
                                {pokemon2.stats.map((poke2, index) =>
                                    <tbody key={index}>
                                    <tr>
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
           return <div className='loadingScreen'>Loading...</div>
        }
    }

}

export default PokemonComparison