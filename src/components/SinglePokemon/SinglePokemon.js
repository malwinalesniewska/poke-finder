import React, {Fragment} from 'react';
import './_SinglePokemon.scss'

const SinglePokemon = ({pokemon}) => (
    <Fragment>
        <li className='singlePokemon' style={{ textTransform: 'uppercase'}}>{pokemon.name}</li>
    </Fragment>

);

export default SinglePokemon;