import React from 'react';
import axios from 'axios';

class ListPlaylists extends React.Component {
  state = {
    playlists: [
      {
        id:1,
        name: "elizz"
      }
    ]
   
  }

  componentDidMount = () => {
    this.getPlaylists()
  }

  getPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "elizabeth-barbosa-jackson"
      }
    })
    .then(response => {
      console.log(response.data)

    })
    .catch(error => {
      console.log(error.messege)
    })

  }

  render () {
    return (
      <div>
         {this.state.playlists.map((item) => {
           return (
             <p key={item.id}>
               {item.name}
               <button> x</button>
             </p>
            )

          })}
      </div>
    );
  }
}

export default ListPlaylists;
