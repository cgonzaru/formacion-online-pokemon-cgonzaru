import React from 'react';
import { Link } from 'react-router-dom';

const PokeDetail = props => {
	const { routerProps, api } = props;
	const pokeId = parseInt(routerProps.match.params.pokeId);

	if (pokeId > api.length) {
		return (
			<div>
				<p>El número del detalle excede el número de pokemons </p>
				<Link to="/" className="app__back">Vuelve al listado</Link>
			</div>
		);
	}

	const detail = api.filter(item => item.id === pokeId);

	if (detail[0]) {
		const { weight, height } = detail[0];
		console.log(detail[0])
		return (
			<div className="detail-detail">
				<Link to="/" className="app__back">{`< `}Volver</Link>
				<div className="detail-info">
					<p className="detail-weight">Weight: {weight}kg</p>
					<p className="detail-height">Height: {height}m</p>

				</div>
			</div>
		);
	}
}

export default PokeDetail