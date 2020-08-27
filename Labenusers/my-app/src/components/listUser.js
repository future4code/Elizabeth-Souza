import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const DelButton = styled.span`
    color: red;
`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class UserList extends React.Component {

    state = {
        users: []
    }

    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(baseUrl, {
            headers: {
                Authorization: "elizabeth-barbosa-jackson"
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({users:response.data})
        })
        .catch(error => {
            console.log(error.message)
        })

    }

    deleteUser = (userId) => {
        axios.delete(`${baseUrl}/${userId}`,{
            headers: {
                  Authorization: "elizabeth-barbosa-jackson"
                }
            })
            .then(response => {
                this.getUsers()
            })  
            .catch(error => {
                console.log(error.messege)
            })
    }

   render(){
       return (
           <div>
             {this.state.users.map (user => {
                 return (
                     <p key={user.id}>
                         {user.name}
                         <DelButton onClick={() => this.deleteUser(user.id)}>  X</DelButton>
                     </p>
                     
                    )
                })}
           </div>
        )
    }
}

export default UserList;
