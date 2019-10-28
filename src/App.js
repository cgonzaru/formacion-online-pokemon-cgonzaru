import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import PokeList from './components/PokeList';
import PokeDetail from './components/PokeDetail';

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

    this.setState({
      userInput: newInput
    })
  }

  getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        for (let item of data.results) {
          fetch(item.url)
            .then(res => res.json())
            .then(pokemon => {
              const arrTypes = [];
              for (let type of pokemon.types) {
                arrTypes.push(type.type.name);
              }
              const pokeInfo = {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                typeList: arrTypes,
                id: pokemon.id
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
        <header className="app__header"><h1 className="app__title">Mi lista de pokemons</h1></header>
        <main className="app__main">

          <Switch>
            <Route exact path='/' render={() => {
              return (
                <Fragment>
                  <input type="text" className="search" onChange={this.getUserInput} />
                  <PokeList
                    userInput={this.state.userInput}
                    api={this.state.api}
                  />
                </Fragment>
              );
            }}
            />

            <Route path='/detail/:pokeId' render={ routerProps => {
              return (
                <PokeDetail 
                  routerProps={routerProps}
                  api={this.state.api}
                />
              );
            }}
            />

          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
