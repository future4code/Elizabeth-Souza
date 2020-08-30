import React from 'react'

import CreatePlay from './components/CreatePlaylist/CreatePlaylist'
import ListPlaylists from './components/ListPlaylist/ListPlays'



class App extends React.Component { 

  state= {
    currentPage: "createPlay"
  }
  changePage = () => {
    this.state.currentPage === "createPlay"
    ? this.setState({ currentPage: "listPlaylist"})
    : this.setState({ currentPage:"createPlay"})
  }

  render () {
    const currentPage = () => {
      if(this.state.currentPage === "createPlay") {
        return <CreatePlay/>
      } else if (this.state.currentPage === "listPlaylist"){
        return <ListPlaylists/>
      }
    }

    return (
      <div>
        {currentPage()}
        <button onClick={this.changePage}>Ir para suas Playlists</button>
      </div>
    );
  }
}

export default App;
