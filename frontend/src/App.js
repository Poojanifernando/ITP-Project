import React, { Component } from  'react';
import {BrowserRouter,Route} from "react-router-dom"


import Homepage from './components/Homepage';
import adminlogin from './components/adminlogin';
import Rentalcost from './components/Rentalcost';
import rentalhome from './components/rentalhome';
import editrentalcost from './components/editrentalcost';
import rentalcostdetails from './components/rentalcostdetails';
import adminsignup from './components/adminsignup';



//Ramona
import Create from './components/Create';
import Edit from './components/Edit';
import HomeRamona from './components/HomeRamona';
import Details from './components/Details';
import assign from './components/assign';
import tripDrivers from './components/tripDrivers';
import response from './components/response';
import assignTrips from './components/assignTrips';








//Nisura
import CreatePostNisura from './components/CreatePostNisura';
import EditPostNisura from './components/EditPostNisura';
import HomeNisura from './components/HomeNisura';
//import NavBar from './components/NavBar';
import PostDetailsNisura from './components/PostDetailsNisura';
import TripPaymentNisura from './components/TripPaymentNisura';

//Azmie 
import CreateLocation from './components/CreateLocation';
import EditLocation from './components/EditLocation';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LocationDetails from './components/LocationDetails';

//pasindu
import CreatePostPasindu from './components/CreatePostPasindu';
import EditPostPasindu from './components/EditPostPasindu';
import PostDetailsPasindu from './components/PostDetailsPasindu';
import HomePasindu from './components/HomePasindu';

import CreatePostPasi from './components/CreatePostPasi';
import EditPostPasi from './components/EditPostPasi';
import HomePasi from './components/HomePasi';
import PostDetailsPasi from './components/PostDetailsPasi';
import DriverSchedulePasindu from './components/DriverSchedulePasindu';
import BusDetailsPasindu from './components/BusDetailsPasindu';
import RouteDetailsPasindu from './components/RouteDetailsPasindu';

//Savinu
import HomeSavinu from './components/HomeSavinu';
//import NavBar from './components/NavBar';
import PostDetailsSavinu from './components/PostDetailsSavinu';
import CreatePostSavinu from './components/CreatePostSavinu';
import EditPostSavinu from './components/EditPostSavinu';

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
       

          <Route path="" component={NavBar}></Route>
          <Route path = "/" exact component = {adminlogin}></Route>
          <Route path = "/adminsignup"  component = {adminsignup}></Route>
          <Route path = "/Home"  component = {Homepage}></Route>
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
        
       
         

        
        
     



 

        
       

        <Route path="/add"  component={HomeNisura}></Route>
        <Route path="/niss"  component={CreatePostNisura}></Route>
        <Route path="/edit/:id" component={EditPostNisura}></Route>
        <Route path="/Nisura/:id" component={PostDetailsNisura}></Route>
        <Route path="/tripcharge" component={TripPaymentNisura}></Route>
         
        <Route path="/managelocation" exact component={Home}></Route>
         <Route path="/addazmie" component={CreateLocation}></Route>
         <Route path="/editazmie/:id" component={EditLocation}></Route>
         <Route path="/locations/:id" component={LocationDetails}></Route>


          
         <Route path="/HomePasindu" component={HomePasindu}></Route>
         <Route path="/editPasindu" component={DriverSchedulePasindu}></Route>
         <Route path="/addPasindu" component={BusDetailsPasindu}></Route>
         <Route path="/addPasindu" component={RouteDetailsPasindu}></Route>
          
    
           <Route path="/addPasindu" component={CreatePostPasindu}></Route>
           <Route path="/editPasindu/:id" component={EditPostPasindu}></Route>
           <Route path="/postPasindu/:id" component={PostDetailsPasindu}></Route>
           <Route path="/HomePasi" exact component={HomePasi}></Route>
           <Route path="/addPasi" component={CreatePostPasi}></Route>
           <Route path="/editPasi/:id" component={EditPostPasi}></Route>
           <Route path="/postPasi/:id" component={PostDetailsPasi}></Route>
           

          <Route path="/HomeSavinu" exact component={HomeSavinu} ></Route>
          <Route path="/addSavinu" exact component={CreatePostSavinu} ></Route>
          <Route path="/editSavinu/:id" exact component={EditPostSavinu} ></Route>
          <Route path="/postSavinu/:id" exact component={PostDetailsSavinu} ></Route>
        

              
      </BrowserRouter>
      

    )
  }
}