import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    greeting: ""
  }
  
  greet = () => {
    this.setState({ greeting: 'Hello Reyaad' })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <button onClick={this.greet}>Greet</button>
        <div>{this.state.greeting}</div>
      </div>
      
    );
  }
}

export default App;
