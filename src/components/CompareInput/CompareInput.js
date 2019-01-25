import React, {Fragment} from 'react';
import './_CompareInput.scss';

class CompareInput extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            checked: [],
            pokeId: 0
        }
    }

    changeHandler = () => {
        this.props.checkPokemon(this.props.pokemonId)
    };


    render() {
        return (
            <Fragment>
                <label>
                    <input type='checkbox' value='compare' onChange={this.changeHandler}/>
                    compare
                </label>
            </Fragment>
        )
    }
}

export default CompareInput;

