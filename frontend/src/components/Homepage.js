import React, { Component } from 'react'
import './Home.css';

export default class homepage extends Component {
    render() {
        return (
           <div >
            
        <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div className="container"><a className="navbar-brand" href="#" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Travelling Express</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link "href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="/HomeRamona" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Drivers</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Scheduled Trips</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Special Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Company Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/cost" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Rental Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/homepage" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Manage Locations</a></li>
                </ul>
                
                <a className="btn btn-light action-button" role="button" href="#" style={{fontsize:'15px', background: 'rgb(69,27,158)' ,color: 'rgb(255,255,255)'}}>Logout</a>
            </div>
        </div>
    </nav>
   <center> <h1> WELCOME Rental Manager..</h1></center>
   
    <button className = "btn btn-success"><a href = "/adminlogin" style = {{textDecoration:'none',color:'white'}}>admin login</a></button>
<br/>

<br/><br/><br/>

 
    <button className = "btn btn-success"><a href = "/createpostsanodya"style = {{textDecoration:'none',color:'white'}}>Rental bus owner registration</a></button>
    <br/><br/><br/>
   
        <button className = "btn btn-success"><a href = "/userlogin" style = {{textDecoration:'none',color:'white'}}>user login</a></button>
  

        <br/><br/><br/>
   
   <button className = "btn btn-success"><a href = "/homeDisni" style = {{textDecoration:'none',color:'white'}}>TICKET BOOKING</a></button>

          </div>




          
          
        )
    }
}


