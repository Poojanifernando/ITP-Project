import React, { Component } from 'react'
import './Home.css';

export default class homepage extends Component {
    render() {
        return (
           <div >
            
       
   <center> <h1> WELCOME Rental Manager..</h1></center>
   
    <button className = "btn btn-success"><a href = "/adminlogin" style = {{textDecoration:'none',color:'white'}}>admin login</a></button>
<br/>

<br/><br/><br/>

 
    <button className = "btn btn-success"><a href = "/createpostsanodya"style = {{textDecoration:'none',color:'white'}}>Rental bus owner registration</a></button>
    <br/><br/><br/>
   
        <button className = "btn btn-success"><a href = "/userlogin" style = {{textDecoration:'none',color:'white'}}>user login</a></button>
  

        <br/><br/><br/>
   
   <button className = "btn btn-success"><a href = "/homeDisni" style = {{textDecoration:'none',color:'white'}}>TICKET BOOKING</a></button>

    <br/><br/>
   <button className = "btn btn-success"><a href = "/secard" style = {{textDecoration:'none',color:'white'}}>Season Card</a></button>

          </div>




          
          
        )
    }
}


