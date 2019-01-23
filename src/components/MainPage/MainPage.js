import React, {Fragment} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonList from '../PokemonList/PokemonList';


class MainPage extends React.Component {
    constructor(props) {
        super (props);
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
                this.setState({
                    pokemons: data.results,
                    shouldRender: true
                });
            })
    }

    render(){
        const {pokemons, shouldRender} = this.state;
        if(!shouldRender){
            return <div id='loadingScreen'>Loading...</div>;
        }
        return(
            <Fragment>
                <SearchBar/>
                <PokemonList pokemons={pokemons}/>
            </Fragment>
        )
    }
}

export default MainPage;