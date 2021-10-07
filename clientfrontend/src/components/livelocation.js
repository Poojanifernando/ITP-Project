import React from 'react';
import './azmie.css'

class livelocation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longtitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
          alert = ("Geolocation is not supported by this browser.");
        }
      }

      getCoordinates(position) {
          console.log(position)
          
      }

    render(){
        return(
        <div className="App">
            <h2>
                Here You Are
            </h2>
            <button onClick={this.getLocation}>Get My Location</button>
            <h4>Here's Your Location</h4>
            <p>Lattitude: {this.state.latitude}</p>
            <p>Longitude: {this.state.longtitude}</p>
            <h4>You are here</h4>
            <p>Address: {this.state.userAddress}</p>
        </div>
        )
    }
}

export default livelocation;
