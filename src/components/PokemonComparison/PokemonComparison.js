import React from 'react';

class PokemonComparison extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: '',
            pokemon2: ''
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
                }).then(data => {
                this.setState({
                    pokemon1: data
                });
            console.log(data)
        });
    };

    getSecondPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId2}`).then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                }).then(data => {
                this.setState({
                    pokemon2: data
                });
            console.log(data)
        });
    };

    render() {
        const {pokemon1, pokemon2} = this.state;
        return (
            <div>{pokemon1.name} {pokemon2.name}</div>
        )
    }

}

export default PokemonComparison