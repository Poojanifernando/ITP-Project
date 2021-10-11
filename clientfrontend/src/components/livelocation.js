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

          <div className=''><div style={{backgroundColor:"#BDD3E5"}}>
        <div className="livelocation">
            <br/><center><h2>
                Here You Are
            </h2><br/>
            <button  className="btn btn-dark" onClick={this.getLocation}>Get My Location</button><br/><br/>
            <h3>Here's Your Location</h3><br/>
            <h4><p>Lattitude: {this.state.latitude}</p><br/>
            <p>Longitude: {this.state.longitude}</p><br/>
            You are here<br/></h4></center>

          





          

            {
                this.state.latitude && this.state.longitude ?
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyCxWHqmcr4F4HOw6o9sbqU_vnDq5peVM50`} alt=''/>
                :
                null
            }
        </div></div></div>
      )
    }
}


export default livelocation;
