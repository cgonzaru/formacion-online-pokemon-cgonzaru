import React from 'react';
import '../styles/PokeCard.scss';
import PropTypes from 'prop-types';

const PokeCard = props => {
  const {image, name, typeList, weight} = props;
  return (
    <div className="container">
      <img src={image} alt={name} className="pokemon__img" />
      <div className="pokemon__info">
        <h2 className="pokemon__name">{name}</h2>

        <ul className="pokemon__type">
          {typeList
            .map((type, index) => {
              return (
                <li className="type" key={index}>{type}</li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

PokeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  typeList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PokeCard;