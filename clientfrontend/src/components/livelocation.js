import React from 'react';



class livelocation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
          alert = ("Geolocation is not supported by this browser.");
        }
      }

      getCoordinates(position) {
          this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude

          })
          
      }

      handleLocationError(error){
            switch(error.code) {
              case error.PERMISSION_DENIED:
                alert = ("User denied the request for Geolocation.")
                break;
              case error.POSITION_UNAVAILABLE:
                alert = ("Location information is unavailable.")
                break;
              case error.TIMEOUT:
                alert = ("The request to get user location timed out.")
                break;
              case error.UNKNOWN_ERROR:
                alert = ("An unknown error occurred.")
                break;
                default:
                alert = ("An unknown error occurred.")
            }
      }

    render(){
        return(
        <div className="livelocation">
            <h2>
                Here You Are
            </h2>
            <button onClick={this.getLocation}>Get My Location</button>
            <h4>Here's Your Location</h4>
            <p>Lattitude: {this.state.latitude}</p>
            <p>Longitude: {this.state.longitude}</p>
            <h4>You are here</h4>
            <p>Address: {this.state.userAddress}</p>
            {
                this.state.latitude && this.state.longitude ?
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyC-Z_Y13L-7-jdfQiV3ucBRyQuGm2guC6k`} alt=''/>
                :
                null
            }
        </div>
      )
    }
}


export default livelocation;
