import React from 'react';
import { useHistory } from 'react-router-dom'

function ListTripPage() {

  const detailsPage = useHistory ()
  const createPage = useHistory ()

  const goToDetailsPage = () => {
    detailsPage.push("/trips/details")
  }
  
  const goToCreatePage = () => {
    createPage.push("/trips/create")
  }


  return (
    <div>
      <button onClick={ goToDetailsPage }>Detalhes</button>
      <button onClick={ goToCreatePage }>Crie uma nova Viagem</button>
    </div>
  );
}

export default ListTripPage;
