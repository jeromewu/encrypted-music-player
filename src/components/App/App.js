import React, { Component } from 'react';
import { AES, enc } from 'crypto-js';


class App extends Component {
  state = {
    imageData: '',
  }

  componentWillMount() {
    fetch('/audios/crowd-cheering.mp3.enc')
      .then(resp => resp.json())
      .then(({ header, data }) => {
        this.setState({
          imageData: `${header}${AES.decrypt(data, 'test').toString(enc.Utf8)}`,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <audio controls src={this.state.imageData}>
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

export default App;
