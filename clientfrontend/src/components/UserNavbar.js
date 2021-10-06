import React, { Component } from 'react'
import './Nav.css';

export default class UserNavbar extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#080523"}}>
            <div>
                <table><tr><th>
            <img src="/Logo.jpeg" class="mx-auto" alt="" width="180px" height="150px"/></th>
 
              
                </tr></table> 



           <div>
          
        <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link "href="/" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="/HomeRamona" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Drivers</a></li>
                    <li className="nav-item"><a className="nav-link" href="/homeDisni" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Ticket Booking</a></li>
                    <li className="nav-item"><a className="nav-link" href="/niss" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Special Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Company Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/createpostsanodya" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Rental Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/addazmie" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Tracking</a></li>
                    <li className="nav-item"><a className="nav-link" href="/secard" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Season Card</a></li>
                    
                    <li></li>
                   
                  
                </ul>
                
                
            </div>
        </div>
    </nav>
          </div>
      
       
        
          </div>

          </div>
        )
    }
}


