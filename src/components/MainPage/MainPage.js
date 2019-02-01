import React, {Fragment} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonList from '../PokemonList/PokemonList';
import './_MainPage.scss'


class MainPage extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            pokemons: [],
            cachedPokemons: [],
            shouldRender: false,
            nextPageUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=73&offset=0',
            prevPageUrl: 'https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=73',
            currentPage: 1
        }
    }

    componentDidMount() {
        this.getNextPage(this.state.nextPageUrl);
        this.getPrevPage(this.state.prevPageUrl)
    }

    getNextPage = () => {
        fetch(this.state.nextPageUrl).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({
                    pokemons: data.results,
                    cachedPokemons: data.results,
                    shouldRender: true,
                    nextPageUrl: data.next,
                    prevPageUrl: data.previous,
                    currentPage: this.state.currentPage + 1
                });
            });
    };

    getPrevPage = () => {
        fetch(this.state.prevPageUrl).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({
                    pokemons: data.results,
                    cachedPokemons: data.results,
                    shouldRender: true,
                    nextPageUrl: data.next,
                    prevPageUrl: data.previous,
                    currentPage: this.state.currentPage - 1
                });
            })
    };


    filterPokemons = inputFilter => {
        if (inputFilter.trim().length === 0) {
            this.setState({ pokemons: this.state.cachedPokemons});
        } else {
            const pokemons = this.state.cachedPokemons.filter(pokemon =>
                pokemon.name
                    .toLowerCase()
                    .trim()
                    .includes(inputFilter.toLowerCase().trim())
            );
            this.setState({
                pokemons
            });
        }
    };

    render(){
        const {pokemons, shouldRender, currentPage} = this.state;
        if(!shouldRender){
            return <div id='loadingScreen'>Loading...</div>;
        }
        return(
            <Fragment>

                <SearchBar onSearch={this.filterPokemons}/>

                <PokemonList pokemons={pokemons}>
                    <div className='buttons'>
                        <button className='previous_btn lower'
                                onClick={this.getPrevPage}
                                disabled={currentPage === 1}>Previous</button>
                        <p>-{currentPage}-</p>
                        <button className='next_btn lower'
                                onClick={this.getNextPage}
                                disabled={currentPage === 13}>Next</button>
                    </div>
                </PokemonList>

            </Fragment>
        )
    }
}

export default MainPage;