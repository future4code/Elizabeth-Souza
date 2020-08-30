import React from 'react';
import styled from "styled-components"

const DelButton = styled.span`
color: red;
`


class ListPlaylists extends React.Component {
  state = {
    playlists: [
      {
        id:1,
        name: "elizz"
      }
    ]
   
  }
  render () {
    return (
      <div>
         {this.state.playlists.map(item => {
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
