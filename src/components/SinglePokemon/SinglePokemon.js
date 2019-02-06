import React from 'react';
import './_SinglePokemon.scss';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import CompareInput from '../CompareInput/CompareInput'

class SinglePokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseEnter: false,
            isChecked: false
        }
    }

    enterHandler = () => {
        this.setState({
            mouseEnter: true
        })
    };

    leaveHandler = () => {
        this.setState({
            mouseEnter: false
        })
    };

    checkedHandler = () => {
        this.setState({
            isChecked: true
        })
    };

    render() {
        const {pokemon, checkPokemon} = this.props;
        const {mouseEnter, isChecked} = this.state;
        const splitedUrl = pokemon.url.split("/");
        const pokemonId = splitedUrl[splitedUrl.length - 2];
        return (
            <li className='singlePokemon'
                style={{textTransform: 'uppercase'}}
                onMouseEnter={this.enterHandler}
                onMouseLeave={this.leaveHandler}>
                <Link to={`/pokemon/${pokemonId}`}>{pokemon.name}</Link>
                {mouseEnter || isChecked ?
                    <CompareInput pokemonId={pokemonId}
                                  checkPokemon={checkPokemon}
                                  onCheck={this.checkedHandler}/>
                : null}
            </li>
        )
    }
}

SinglePokemon.propTypes = {
    pokemon: PropTypes.object
};

export default SinglePokemon;

