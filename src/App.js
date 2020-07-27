import React, { Component } from "react";

import { Cardlist } from "./component/card-list/card-list.component";

import { SearchBox } from "./component/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  /* Lifecycle method*/
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((individual) => this.setState({ monsters: individual }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="Search for monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
