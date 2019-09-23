import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
import f from './zoro.jpg'

let message = 'HELLO'
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
  }
}

class App extends React.Component {
  reset = () => {
    this.setState({ completed: !this.state.completed, attempt: this.state.attempt + 1 })
  }
  state = prepareStateFromWord(message);
  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }
  render() {
    return (
    
      <div className="cen">
        <div>
          <img src={f} width="300" height="350" align="top"/>
          {
            Array.from(this.state.chars).map((item, index) => (
              <CharacterCard
                value={item}
                key={index}
                activationHandler={this.activationHandler}
                attempt={this.state.attempt}
              />
            ))
          }
        </div>
        <h2>Selected</h2>
        <div>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        </div>
        <div>Attemp {this.state.attempt}</div>
        {
          this.state.completed && <h4>Complete</h4>
        }
        <div>
          {
            this.state.completed && <button onClick={this.reset}>Reset</button>
          }
        </div>
      </div>
    )
  }
}

export default App;