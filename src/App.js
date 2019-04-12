import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card/index"
import characters from "./characters.json"

//array shuffler from https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react
function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state ={
    characters,
    clicked: [],
    score: 0,
    highscore: 0
  };
  
  handleCharacterClick = (id) => {
    if(this.state.clicked.indexOf(id)=== -1){
      this.handleCorrect();
      console.log(id)
      //concat method found "https://www.robinwieruch.de/react-state-array-add-update-remove/"
      this.setState({clicked:this.state.clicked.concat(id)})
      this.handleRandomizer();
    }else{
      this.handleIncorrect();
    }
  }

  handleCorrect = () => {
    const score = this.state.score + 1;
    this.setState ({score: score});
  }

  handleIncorrect = () => {
    this.setState({
      score:0,
      clicked: [],
      highscore: this.state.highscore
    })
  };

  handleRandomizer = () => {
    let shuffledCharacters = shuffleArray(characters);
    this.setState({characters:shuffledCharacters})
  }
  render() {
    return (
      <div>
        <h3>Score: {this.state.score}</h3>
        <h4>High Score: {this.state.highscore}</h4>
        <br></br>
        {this.state.characters.map(characters => (
        <Card 
        id = {characters.id}
        key ={characters.id}
        image={characters.image}
        clicked = {this.handleCharacterClick}
        shuffleArray = {this.shuffleArray}
        />
      ))}
      </div>
    );
  }
}

export default App;
