import React, { Component } from 'react'
import './Nav.css';

export default class NavBar extends Component {
    render() {
        return (
           <div>
        <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div className=""><a className="navbar-brand" href="#" style={{fontsize: '19px',color:'rgb(255,255,255)'}}></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">

            <li className="nav-item"><a className="nav-link " style={{fontsize:'15px',color:'rgb(255,255,255)'}}><i>TRAVELLING EXPRESS</i></a></li>
                    <li className="nav-item"><a className="nav-link "href="/Home" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Home</a></li>
               
                    <li className="nav-item"><a className="nav-link" href="/HomeRamona" style={{fontsize:'15px',color:'rgb(255,255,255)'}}> Assign Drivers</a></li>
                    <li className="nav-item"><a className="nav-link" href="HomePasindu" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Trip sheduling</a></li>
                    <li className="nav-item"><a className="nav-link" href="/add" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Special Services</a></li>

                    <li className="nav-item"><a className="nav-link" href="/HomePasi" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Company Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/cost" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Rental Calculation </a></li>
                    <li className="nav-item"><a className="nav-link" href="/managelocation" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Manage Locations</a></li>
                    <li className="nav-item"><a className="nav-link" href="/HomeSavinu" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Employee Management</a></li>
                </ul>
                
                <a className="btn btn-light action-button" role="button" href="/" style={{fontsize:'15px', background: 'rgb(69,27,158)' ,color: 'rgb(255,255,255)'}}>Logout</a>
            </div>
        </div>
    </nav>
          </div>
          
        )
    }
}


