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
         

         
         

              
      </BrowserRouter>

    )
  }
}