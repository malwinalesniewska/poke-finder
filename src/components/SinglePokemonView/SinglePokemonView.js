import React from 'react';
import './_SinglePokemonView.scss'

class SinglePokemonView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            shouldRender: false,
            loadStats: false
        }
    }

    componentDidMount() {

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({
                    pokemon: data,
                    shouldRender: true
                })
            })
    }

    showStats = () => {
        this.setState({
            loadStats: true
        })
    };

    hideStats = () => {
        this.setState({
            loadStats: false
        })
    };

    render() {
        const {pokemon, shouldRender, loadStats} = this.state;
        if(!shouldRender){
            return <div id='loadingScreen'>Loading...</div>;
        }
        return (
            <div className='single_pokemon_view_container'>
                <div className='single_pokemon_view'
                    style={{
                        height: loadStats ? '400px' : '300px'
                    }}>
                    <img src={pokemon.sprites.front_default} alt='pokemon_img'/>
                    <div className='properties_list' >
                        <p className='pokemon_name'>{pokemon.name}</p>
                        <p>{pokemon.types.length > 1 ? 'Types: ' : 'Type: ' }
                        {pokemon.types.map((elem, index) => {
                            return <span key={index} style={{textTransform: 'uppercase'}}>{elem.type.name}&nbsp;</span>
                        })} </p>
                        <p>Base experience: {pokemon.base_experience}</p>
                        <button className='show_stats_btn' onClick={this.showStats}
                        style={{
                            display: loadStats ? 'none' : 'block'
                        }}>Show stats</button>
                    </div>
                    <div className='stats_list'>
                        {(loadStats) ? (
                            <table>
                                <thead>
                                    <tr>
                                        <td style={{textAlign: 'left'}}>Name</td>
                                        <td>Base</td>
                                        <td >Effort</td>
                                    </tr>
                                </thead>
                                {pokemon.stats.map((elem, index) =>
                                    <tbody key={index}>
                                        <tr>
                                            <td style={{textAlign: 'left'}}>{elem.stat.name}</td>
                                            <td>{elem.base_stat}</td>
                                            <td>{elem.effort}</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        ) : null
                        }
                    </div>
                    {(loadStats ? <button className='hide_stats_btn' onClick={this.hideStats}>HIDE</button> : null)}

                </div>
            </div>
        )

    }
}
export default SinglePokemonView;