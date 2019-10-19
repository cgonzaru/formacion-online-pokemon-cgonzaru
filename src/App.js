import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: [],
      userInput: ''
    }

    this.getUserInput = this.getUserInput.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  getUserInput(event) {
    const newInput = event.currentTarget.value;

    this.setState ({
      userInput: newInput
    })
  }

  getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      for(let item of data.results) {
        fetch(item.url)
        .then(res => res.json())
        .then(pokemon => {
          console.log(pokemon)
          const arrTypes = [];
          for (let type of pokemon.types) {
            arrTypes.push(type.type.name);
          }
          const pokeInfo = {
            name: pokemon.name,
            image : pokemon.sprites.front_default,
            typeList : arrTypes
          }
          this.setState({
            api: [...this.state.api, pokeInfo]
          }) 
        })
      }

    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header"><h1>Mi lista de pokemons</h1></header>
        <main className="app__main">
          <input type="text" className="search" onChange={this.getUserInput}/>
          <ul className="pokemons__list">
            {this.state.api
              .filter(character => character.name.toUpperCase().includes(this.state.userInput.toUpperCase()))
              .map(item => {
                return (
                  <li className="pokemon__card">
                    <img src={item.image} alt={item.name} className="pokemon__img"/>
                    <div className="pokemon__info">
                      <h2 className="pokemon__name">{item.name}</h2>
                      
                      <ul className="pokemon__type">
                        {item.typeList
                          .map(type => {
                            return(
                              <li className="type">{type}</li>
                            );
                          })}
                      </ul>
                    </div>
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
