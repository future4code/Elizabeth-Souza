import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    const parametros = this.getHashParams()
    const token = parametros.access_token
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
    }
    return hashParams;
   }

  render () {
    return (
      <div className="App">
        <button> <a href = "http://localhost:8888">Logar com Spotify</a></button>
     </div>
    )
  }
}

export default App;
