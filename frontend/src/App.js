import React, { Component } from 'react'
import {BrowserRouter,Route} from  'react-router-dom';

import CreateLocation from './components/CreateLocation';
import EditLocation from './components/EditLocation';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LocationDetails from './components/LocationDetails';

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        
        <NavBar/>
         <Route path="/homepage" exact component={Home}></Route>
         <Route path="/add" component={CreateLocation}></Route>
         <Route path="/edit/:id" component={EditLocation}></Route>
         <Route path="/locations/:id" component={LocationDetails}></Route>
        
      </div>
      </BrowserRouter>
    )
  }
}