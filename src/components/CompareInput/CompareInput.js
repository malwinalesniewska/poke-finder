import React from 'react';
import './_CompareInput.scss';

class CompareInput extends React.Component {

    changeHandler = () => {
        this.props.checkPokemon(this.props.pokemonId);
        this.props.onCheck(this.props.isChecked)
    };

    render() {
        return (
            <label>
                <input
                    type='checkbox'
                    value='compare'
                    onChange={this.changeHandler}
                />
                compare
            </label>
        )
    }
}

export default CompareInput;

