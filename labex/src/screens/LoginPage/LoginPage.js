import React from 'react';
import { useHistory } from 'react-router-dom'

function LoginPage() {
  const listTrip = useHistory ()

  const goToListTrip = () => {
    listTrip.push("/trips/list")
  }
  
  return (
    <div>
      <button onClick={goToListTrip}>Ir para lista</button>
    </div>
  );
}

export default LoginPage;
