import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      userInput: ''
    }
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemons: data.results
      })
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header"><h1>Mi lista de pokemons</h1></header>
        <main className="app__main">
          <input type="text" className="search"/>
          <ul className="pokemons__list">
            {this.state.pokemons
              .map(item => {
                return (
                  <li className="pokemon__card">
                    {item.name}
                  </li>
                );
              })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
