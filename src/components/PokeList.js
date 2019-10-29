import React from 'react';
import PokeCard from '../components/PokeCard';
import {Link} from 'react-router-dom';
import '../styles/PokeList.scss';
import PropTypes from 'prop-types';

const PokeList = props => {
  const { userInput, api } = props;
  return (
    <ul className="pokemons__list">
      {api
        .filter(character => character.name.toUpperCase().includes(userInput.toUpperCase()))
        .map((item, index) => {
          return (
            <li className="pokemon__card" key={index}>
              <Link to={`/detail/${item.id}/`} className="character-link">
                <PokeCard
                  image={item.image}
                  name={item.name}
                  typeList={item.typeList}
                  weight={item.weight}
                />
              </Link>
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