import React, { Component } from  'react';
import {BrowserRouter,Route} from "react-router-dom"

//anodya
import homeanodya from './components/homeanodya';
import Homepage from './components/Homepage';
import editanodya from './components/editanodya';
import userlogin from './components/userlogin';
import usersignup from './components/usersignup';
import createpostsanodya from './components/createpostsanodya';



//Disni
import Ticket from './components/Ticket';
import CreateTicket from './components/CreateTicket';
import EditTicket from './components/EditTicket';
import TicketDetails from './components/TicketDetails';
import TicketSlip from './components/TicketSlip';
import TicketPayment from './components/TicketPayment';
import TimetableDisni from './components/TimetableDisni';
//import FooterTicket from './components/FooterTicket';





//Dineth
import CardDetails from './components/CardDetails';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import HomeDineth from './components/HomeDineth';
import ReCharge from './components/ReCharge';
import SeasonCard from './components/SeasonCard';
import UserHome from './components/UserHome';
import ChargeHome from './components/ChargeHome';
import EditCharge from './components/EditCharge';


//Nisura
import CreatePostNisura from './components/CreatePostNisura';
import EditPostNisura from './components/EditPostNisura';
import HomeNisura from './components/HomeNisura';
import PostDetailsNisura from './components/PostDetailsNisura';
import TripPaymentNisura from './components/TripPaymentNisura';

//Azmie 
import CreateLocation from './components/CreateLocation';
import EditLocation from './components/EditLocation';
import Home from './components/Home';
import UserNavbar from './components/UserNavbar';
import LocationDetails from './components/LocationDetails';
import livelocation from './components/livelocation';


export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
       

         <Route path="" component={UserNavbar}></Route>
          <Route path = "/"  exact component = {userlogin}></Route>
          <Route path = "/usersignup" component = {usersignup}></Route>
          <Route path = "/dashboard" component = {Homepage}></Route>
          <Route path = "/homeanodya"  component = {homeanodya}></Route>
          <Route path = "/createpostsanodya" component = {createpostsanodya}></Route>
          <Route path = "/editanodya/:id" component = {editanodya}></Route>
         
        
        
        <Route path="/homeDisni" exact component={Ticket}></Route>
        <Route path="/addDisni" component={CreateTicket}></Route>
        <Route path="/editDisni/:id" component={EditTicket}></Route>
        <Route path="/postDisni/:id" component={TicketDetails}></Route>
        <Route path="/ticket/:id" component={TicketSlip}></Route>
        <Route path="/ticketpayment/:id" component={TicketPayment}></Route>
        <Route path="/timetable" component={TimetableDisni}></Route>



        <Route path="/secard" exact component={SeasonCard}></Route>         
        <Route path ="/list" component={HomeDineth}></Route> 
        <Route path ="/addCard" component={CreateCard}></Route>         
        <Route path ="/editCard/:id" component={EditCard}></Route>
        <Route path ="/card/:id" component={CardDetails}></Route>
        <Route path ="/charge" component={ReCharge}></Route>
        <Route path = "/userhome"  component = {UserHome}></Route>
        <Route path = "/chargelist" component={ChargeHome}></Route>
        <Route path = "/editCharge/:id" component = {EditCharge}></Route>

        
       

        <Route path="/add"  component={HomeNisura}></Route>
        <Route path="/niss"  component={CreatePostNisura}></Route>
        <Route path="/edit/:id" component={EditPostNisura}></Route>
        <Route path="/Nisura/:id" component={PostDetailsNisura}></Route>
        <Route path="/tripcharge" component={TripPaymentNisura}></Route>
         
        <Route path="/managelocation" exact component={livelocation}></Route>
        <Route path="/managelocation" exact component={Home}></Route>
         <Route path="/addazmie" component={CreateLocation}></Route>
         <Route path="/editazmie/:id" component={EditLocation}></Route>
         <Route path="/locations/:id" component={LocationDetails}></Route>
         



              
      </BrowserRouter>
      

    )
  }
}