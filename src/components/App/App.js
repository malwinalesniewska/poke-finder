import React, {Component} from 'react';
import './_colors.scss'
import './_App.scss';
import Logo from "../Logo/Logo";
import {HashRouter, Switch, Route} from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import SinglePokemonView from "../SinglePokemonView/SinglePokemonView";
import PokemonComparison from '../PokemonComparison/PokemonComparison'

class App extends Component {

    render() {

        return (
            <div>
                <Logo/>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/pokemon/:pokemonId" component={SinglePokemonView}/>
                        <Route path="/compare/:pokemonId1/:pokemonId2" component={PokemonComparison}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
