import React from 'react';
import axios from 'axios'



class CreatePlay extends React.Component {
  state = {
    nameValue: ""
  }
  onChangeName = (event) => {
    this.setState({nameValue: event.target.value})
  }
  createPlaylist = () => {
    const body = {
      name: this.state.nameValue
    }
    console.log(body)
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
       headers: {
         Authorization: "elizabeth-barbosa-jackson"
        }
      })
      .then(response => {
        console.log("Playlist criada com sucesso!")
        this.setState({nameValue: ""})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
         <p>Adicione uma Playlist:</p>
         <input onChange={this.onChangeName} value={this.state.nameValue} placeholder="Digite o nome da sua Playlist"/>
         <button onClick={this.createPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}

export default CreatePlay;
