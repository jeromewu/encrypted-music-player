import React, { Component } from 'react';
import { AES, enc } from 'crypto-js';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    imageData: '',
  }

  componentWillMount() {
    fetch('/audios/crowd-cheering.mp3.enc')
      .then(resp => resp.json())
      .then(({ header, data }) => {
        try {
          const d = AES.decrypt(data, 'test12').toString(enc.Utf8);
        } catch (e) {}
        this.setState({
          imageData: `${header}${AES.decrypt(data, 'test').toString(enc.Utf8)}`,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <audio controls src={this.state.imageData} />
      </div>
    );
  }
}

export default App;
