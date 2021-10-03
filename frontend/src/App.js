import React, { Component } from  'react';
import {BrowserRouter,Route} from "react-router-dom"

import homeanodya from './components/homeanodya';
import Homepage from './components/Homepage';
import editanodya from './components/editanodya';
//import adminlogin from './Components/adminlogin';
import Rentalcost from './components/Rentalcost';
//import UserLogin from './components/UserLogin';
import rentalhome from './components/rentalhome';
import editrentalcost from './components/editrentalcost';
import rentalcostdetails from './components/rentalcostdetails';
//import adminsignup from './Components/adminsignup';
//import Usersignup from './Components/Usersignup';
import createpostsanodya from './components/createpostsanodya';

//Ramona
import Create from './components/Create';
import Edit from './components/Edit';
import HomeRamona from './components/HomeRamona';
import Details from './components/Details';
import assign from './components/assign';
import tripDrivers from './components/tripDrivers';
import response from './components/response';
import assignTrips from './components/assignTrips';



export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
       
        <navbar/>
          <Route path = "/" exact component = {Homepage}></Route>
          <Route path = "/homeanodya"  component = {homeanodya}></Route>
          <Route path = "/createpostsanodya" component = {createpostsanodya}></Route>
          <Route path = "/editanodya/:id" component = {editanodya}></Route>
          <Route path = "/cost" component = {Rentalcost}></Route>
          <Route path = "/rentalhome" component = {rentalhome}></Route>
          <Route path = "/editrentalcost/:id" component = {editrentalcost}></Route>
          <Route path = "/rentalcostdetails/:id" component = {rentalcostdetails}></Route>


        <Route path="/HomeRamona" component={HomeRamona}></Route>
        <Route path="/addRamona" component={Create}></Route>
        <Route path="/editRamona/:id" component={Edit}></Route>
        <Route path="/postRamona/:id" component={Details}></Route>
        <Route path="/assign" component={assign}></Route>
        <Route path="/tripDrivers" component={tripDrivers}></Route>
        <Route path="/response/:id" component={response}></Route>
        <Route path="/assignTrips/:id" component={assignTrips}></Route>
         

         
         

              
      </BrowserRouter>

    )
  }
}