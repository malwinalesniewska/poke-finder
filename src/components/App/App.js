import React, { Component } from 'react';
import './_colors.scss'
import './_App.scss';
import Logo from "../Logo/Logo";
import SearchBar from '../SearchBar/SearchBar'
import PokemonList from '../PokemonList/PokemonList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            shouldRender: false
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0`).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    pokemons: data.results,
                    shouldRender: true
                })
        })
    }

    render() {
        const {pokemons, shouldRender} = this.state;
        if(!shouldRender){
            return <div>Loading...</div>;
        }
        return (
              <div>
                  <Logo/>
                  <SearchBar/>
                  <PokemonList pokemons={pokemons}/>
              </div>
        );
  }
}

export default App;
