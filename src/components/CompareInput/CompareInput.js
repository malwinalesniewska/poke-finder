import React, {Fragment} from 'react';
import './_CompareInput.scss';

class CompareInput extends React.Component {

    changeHandler = () => {
        this.props.checkPokemon(this.props.pokemonId);
        this.props.onCheck(this.props.isChecked)
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

