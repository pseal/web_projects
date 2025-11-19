import './App.css';

import React from 'react';

class StarWars extends React.Component{
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      species: null,
      image: null,
    }
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88)
    const url = `https://github.com/akabab/starwars-api/blob/master/api/id/${randomNumber}.json/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
        name: data.name,
        height: data.height,
        species: data.species,
        image: data.image,
        loadedCharacter: true,
      })
    
    })
  }
  
  render() {

    return(
      <div>
        {
          this.state.loadedCharacter &&
          <div>   
            <h1>{this.state.name}</h1>
            <p>{this.state.height} m</p>
            <p>{this.state.species}</p>
            <p><a href={this.state.image}>Image</a></p>          
          </div>
        }

        <button type="button" onClick={() => this.getNewCharacter()}
          className="btn">
          Randomize Character</button>
      </div>
    )
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <StarWars />
      </header>
    </div>
  );
}

export default App;
