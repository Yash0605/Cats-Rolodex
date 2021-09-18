import "./App.css";

import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { Search } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  // Arrow fun used insted of normal fun coz this is inferred from parent in case of Arrow fun whic is required in our case
  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className='cat-header'>Cats Rolodex</h1>
        <Search
          placeholder="Search Cats"
          handleChange={this.handleChange}
        ></Search>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
