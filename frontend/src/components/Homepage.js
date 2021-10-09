import React, { Component } from 'react'
import './Home.css';

export default class homepage extends Component {
    render() {
        return (
           <div >
<br/>
            <center> <h1> <b>WELCOME TO TRAVELLING EXPRESS</b> </h1></center>

<br/><br/><br/><br/>
            <center>
               
 <div style={{backgroundColor:"white"}}>
                <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
             
                <br/>
                <div className="row">
                <div className="col-sm-4">
                    <p className="text-center"><strong><h3><i>Assign Drivers</i></h3></strong></p>
                    <a href="/HomeRamona" data-toggle="collapse">
                        <img src="ramona.jpeg" className="img-circle person" alt="" width="200" height="200"/>
                    </a>
                  <br/><br/><br/>
                </div>
                <div className="col-sm-4">
                    <p className="text-center"><strong><h3><i>Trip Sheduling</i></h3></strong></p><br/>
                    <a href="/HomePasindu" data-toggle="collapse">
                        <img src="shedule098.jpg" className="img-circle person" alt="" width="200" height="200"/>
                    </a>
                  <br/><br/>
                </div>
                <div className="col-sm-4">
                    <p className="text-center"><strong><h3><i>Bus Details</i></h3></strong></p><br/>
                    <a href="/HomePasi" data-toggle="collapse">
                        <img src="busdetails.jpg" className="img-circle person" alt="" width="200" height="200"/>
                    </a>
                  <br/><br/>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <p className="text-center"><strong><h3><i>Rental cost calculation</i></h3></strong></p><br/>
                    <a href="/rentalhome" data-toggle="collapse">
                        <img src="calculation123.jpg" className="img-circle person" alt="Random Name" width="200" height="200"/>
                    </a>
                  <br/><br/><br/>
                </div>

                <div className="col-sm-4">
                    <p className="text-center"><strong><h3><i>Employee Management</i></h3></strong></p><br/>
                    <a href="/HomeSavinu" data-toggle="collapse">
                        <img src="emp123.jpg" className="img-circle person" alt="Random Name" width="200" height="200"/>
                    </a>
                  <br/><br/><br/>
                </div>
                <div className="col-sm-4">
                    <p className="text-center"><strong><h3><i>Driver Confirmation</i></h3></strong></p><br/>
                    <a href="/tripDrivers" data-toggle="collapse">
                        <img src="adriver.jpg" className="img-circle person" alt="" width="200" height="200"/>
                    </a>
                  <br/><br/>
                </div>
                
                </div></div>

</div>
   
              
</center>

  
            </div>
          )
      }
  }
  

