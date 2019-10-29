import React from 'react';

import { CardList } from './components/cardList/CardList'
import { SearchBox } from './components/searchBox/SearchBox'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
