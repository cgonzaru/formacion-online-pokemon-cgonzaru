import React from 'react';
import PokeCard from '../components/PokeCard';
import '../styles/PokeList.scss';
import PropTypes from 'prop-types';

const PokeList = props => {
  const {userInput, api} = props;
  return (
    <ul className="pokemons__list">
      {api
        .filter(character => character.name.toUpperCase().includes(userInput.toUpperCase()))
        .map((item, index) => {
          return (
            <li className="pokemon__card" key={index}>
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