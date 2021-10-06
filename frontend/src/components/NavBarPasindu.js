import React, { Component } from 'react'

export default class NavBarPasindu extends Component {
  render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark" variant="dark" style={{width:"100%"}}>
          <a className="navbar-brand" href="/" style={{textDecoration:'none',color:'white',fontSize:'40px'}}>Travelling Express</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a id="space" className="nav-item nav-link active" href="#" style={{textDecoration:'none',color:'white'}}>Dashboard<span class="sr-only">(current)</span></a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Profile</a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Drivers </a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Scheduled Trips  </a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Special Services</a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Company Bus Details  </a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Rental Bus Details </a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Manage Locations  </a>
              <a id="space" className="nav-item nav-link" href="#" style={{textDecoration:'none',color:'white'}}>Buses  </a>
            </div>
          </div>
        </nav>
      )
  }
}