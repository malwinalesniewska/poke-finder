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
            isLoading: true,
            currentPage: 1,
            currentUrl: ''
        }
    }

    componentDidMount() {
        this.getPokemons()
    }

    getPokemons(url, pageChange) {
        let requestUrl = '';
        if (url) {
            requestUrl = url;
            this.setState({
                currentPage: this.state.currentPage + pageChange
            })
        } else {
            requestUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=73&offset=0'
        }
        this.setState({
            isLoading: true
        });
        fetch(requestUrl).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({
                    pokemons: data.results,
                    cachedPokemons: data.results,
                    isLoading: false,
                    currentUrl: data
                });
            })
    }

    filterPokemons = inputFilter => {
        if (inputFilter.trim().length === 0) {
            this.setState({pokemons: this.state.cachedPokemons});
        } else {
            const filteredPokemons = this.state.cachedPokemons.filter(pokemon =>
                pokemon.name
                    .toLowerCase()
                    .trim()
                    .includes(inputFilter.toLowerCase().trim())
            );
            this.setState({
                pokemons: filteredPokemons
            });
        }
    };

    render(){
        const {pokemons, isLoading, currentPage, currentUrl} = this.state;
        if(isLoading){
            return <div id='loadingScreen'>Loading...</div>;
        }
        return(
            <Fragment>
                <SearchBar onSearch={this.filterPokemons}/>
                <PokemonList pokemons={pokemons}>
                    <div className='buttons'>
                        <button
                            className='previous_btn button'
                            onClick={() => this.getPokemons(currentUrl.previous,-1)}
                            disabled={currentPage === 1}
                        >
                                Previous
                        </button>
                        <p>
                            -{currentPage}-
                        </p>
                        <button
                            className='next_btn button'
                            onClick={() => this.getPokemons(currentUrl.next,+1)}
                            disabled={currentPage === 13}
                        >
                            Next
                        </button>
                    </div>
                </PokemonList>
            </Fragment>
        )
    }
}

export default MainPage;