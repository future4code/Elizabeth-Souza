import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../screens/HomePage/HomePage'
import LoginPage from '../screens/LoginPage/LoginPage'
import FormPage from '../screens/FormPage/FormPage'
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage'
import ListTripPage from '../screens/ListTripPage/ListTripPage'
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage'


export default function Router () {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>    

               <Route exact path="/login">
                  <LoginPage/>
              </Route>   

              <Route exact path="/application-form">
                  <FormPage/>
              </Route>   

              <Route exact path="/trips/create">
                  <CreateTripPage/>
              </Route>   

              <Route exact path="/trips/list">
                  <ListTripPage/>
              </Route>   

              <Route exact path="/trips/details">
                  <TripDetailsPage/>
              </Route>   

              <Route>
                  <div>Deu erro, ein (404) </div>
              </Route>

          </Switch>
        
        </BrowserRouter>
    )
}
