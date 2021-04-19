import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      profiles: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => this.setState({profiles : users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {profiles, searchField} = this.state;
    const filterProfiles = profiles.filter(
      item => item.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
    <div className='App'>
      <h1>Profile list</h1>
      <SearchBox
        placeholder='Search profiles'
        handleChange={this.handleChange}
      />
      <CardList profiles={filterProfiles} />
    </div>
    )
  }
}

export default App;
