import React from 'react';
import PokeCard from '../components/PokeCard';
import PropTypes from 'prop-types';

const PokeList = props => {
  const {userInput, api} = props;
  return (
    <ul className="pokemons__list">
      {api
        .filter(character => character.name.toUpperCase().includes(userInput.toUpperCase()))
        .map(item => {
          return (
            <li className="pokemon__card">
              <PokeCard 
                image={item.image}        
                name={item.name}
                typeList={item.typeList}    
              />
              
            </li>
          );
        })}
    </ul>
  );
};

PokeList.propTypes = {
  userInput: PropTypes.string.isRequired,
  api: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeList;