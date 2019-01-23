import React, {Component} from 'react';
import './_colors.scss'
import './_App.scss';
import Logo from "../Logo/Logo";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import SinglePokemonView from "../SinglePokemonView/SinglePokemonView";

class App extends Component {

    render() {

        return (
            <div>
                <Logo/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/pokemon/:pokemonId" component={SinglePokemonView}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
