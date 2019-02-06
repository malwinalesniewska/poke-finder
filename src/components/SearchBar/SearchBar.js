import React from 'react';
import '../App/_colors.scss';
import "./_SearchBar.scss";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func
    };

    constructor(props) {
        super (props);
        this.state = {
            inputFilter: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputFilter.length > 0 && this.state.inputFilter.length === 0) {
            this.searchPokemon();
        }
    }

    changeHandler = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    };

    searchPokemon = () => {
        this.props.onSearch(this.state.inputFilter);
    };

    render() {
        return (
            <div className='search_bar'>
                <input
                    type='text'
                    className='search searchInput'
                    placeholder='type pokemon name'
                    onChange={this.changeHandler}
                    name='inputFilter'
                    value={this.state.inputFilter}
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            this.searchPokemon();
                        }
                    }}/>
                <button
                    className='search searchButton'
                    type='submit'
                    onClick={this.searchPokemon}>GO!<div className='button_img'/></button>
            </div>
        )
    }
}

export default SearchBar;