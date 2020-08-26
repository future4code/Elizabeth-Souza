import React from 'react';
import axios from 'axios'

class MyUser extends React.Component {
    state = {
        nameValue : "",
        emailValue: ""
    }

    criarUser =() => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization : "elizabeth-barbosa-jackson"
            }
        })
        .then(response => {
            alert("Usuário criado com sucesso")
        }).catch(error => {
            alert("Não foi possível criar o usuário")
        })
    }

    onChangeNameValue = (event) => {
        this.setState({onChangeNameValue: event.target.value})
    }

    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    }


    render (){
        return (
            <div>
                <p>Nome:</p>
                <input
                  value={this.state.nameValue}
                  onChange={this.onChangeNameValue}
                  placeholder={"Nome do Usuário"}
                />
                <p>Email:</p>
                <input
                   value={this.state.emalValue}
                   onChange={this.onChangeEmailValue}
                   placeholder={"Email do Usuário"}
                />

                <button onClique={this.criarUser}>Criar Usuário</button>
            </div>
        )
    }
 
}

export default MyUser;
