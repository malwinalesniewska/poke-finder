import React from 'react';
import '../App/_colors.scss';
import "./_SearchBar.scss";

class SearchBar extends React.Component {
    render() {
        return (
            <div className='search_bar'>
                <input className='search searchInput'/>
                <button className='search searchButton' type='submit'>GO!</button>
            </div>
        )
    }
}

export default SearchBar;