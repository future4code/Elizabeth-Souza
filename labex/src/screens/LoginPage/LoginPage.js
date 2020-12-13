import React, { useState} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {baseUrl} from '../../Constants/BaseUrl'

function LoginPage() {
  const [emailValue, setEmailValue] = useState ("")
  const [passwordValue, setPasswordValue] = useState ("")
  
  const listTrip = useHistory ()

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }

  const handleLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    }

    axios.post(`${baseUrl}/login`, body)
    .then(response => {
      localStorage.setItem("token", response.data.token)
      listTrip.push("/trips/list")
    
    })
    .catch(error => {
      console.log(error)
    })
  }
   
  return (
    <div>
      <input value={ emailValue } onChange={handleEmailChange}/>
      <input value={ passwordValue } onChange={handlePasswordChange}/>
      <button onClick={ handleLogin }>Entrar</button>
    </div>
  );
}

export default LoginPage;
