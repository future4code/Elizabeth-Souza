import React, { useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../Constants/BaseUrl'

function ListTripPage() {

  const detailsPage = useHistory ()
  const createPage = useHistory ()
  const history = useHistory()

  const goToDetailsPage = () => {
    detailsPage.push("/trips/details")
  }
  
  const goToCreatePage = () => {
    createPage.push("/trips/create")
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      getList()
    } else {
      history.push("/")
    }
  }, [history])
  
  const getList = () => {
    axios.get(`${baseUrl}/trips`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.messege)
    })
  }

  return (
    <div>
      <h3>Lista de viagem </h3>
      <button onClick={ goToDetailsPage }>Detalhes</button>
      <button onClick={ goToCreatePage }>Crie uma nova Viagem</button>
    </div>
  );
}

export default ListTripPage;
