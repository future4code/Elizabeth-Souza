import React from 'react';
import { useHistory } from 'react-router-dom'

function HomePage() {


  const formPage = useHistory ()
  const loginPage = useHistory ()

  const goToFormPage = () => {
    formPage.push("/application-form")
  }
  
  const goToLoginPage = () => {
    loginPage.push("/login")
  }

  return (
    <div>
      <button onClick={ goToFormPage }>Inscrever-se</button>
      <button onClick={ goToLoginPage }>Entrar</button>
    </div>
  );
}

export default HomePage
