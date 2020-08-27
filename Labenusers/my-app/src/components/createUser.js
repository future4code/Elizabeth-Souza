import React from "react";
import axios from "axios";
import styled from 'styled-components'


class CreateUserFormPage extends React.Component {
  state = {
     nameValue: "",
     emailValue: ""
    };

  onChangeName = (event) => {
      this.setState({ nameValue: event.target.value });
    };

  onChangeEmail = (event) => {
      this.setState({ emailValue: event.target.value });
    };

  createUser = () => {
      const body = {
          name:this.state.nameValue,
          email:this.state.emailValue
        }
      console.log(body)

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers: {
              Authorization: "elizabeth-barbosa-jackson"
            }
            })  
            .then(response => {
              alert("Usuário criado com Sucesso!")
              this.setState({nameValue: "", emailValue: ""})
            }) 
            .catch(error => {
              alert("Não foi possível criar o usuário")
            })
    }

  render() { 
      return (
           <div>
               <p>Nome:</p>
             <input
               value={this.state.nameValue}
               onChange={this.onChangeName}
               placeholder="nome"
             />
             <p>Email:</p>
             <input
               value={this.state.emailValue}
               onChange={this.onChangeEmail}
               placeholder="email"
             />
             <button onClick={this.createUser}>Criar usuário</button>
           </div>
       );
    }
}

export default CreateUserFormPage;
