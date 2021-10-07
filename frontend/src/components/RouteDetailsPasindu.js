import React, {Component} from 'react'
import axios from 'axios'

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state={
      locations:[]
    };

  }


  componentDidMount(){
    this.retrieveLocations();
  }

retrieveLocations(){
  axios.get("/locations").then(res =>{
    if(res.data.success){
      this.setState({
        locations:res.data.existinglocations
      });

      console.log(this.state.locations)
    }
  });
}


onDelete = (id) =>{

  axios.delete(`/locations/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveLocations();
  })
}


filterData(locations,searchkey){
  
  const result = locations.filter((location) =>
  location.BusNo.toLowerCase().includes(searchkey)||
  location.StartingLocation.toLowerCase().includes(searchkey)||
  location.FirstDestination.toLowerCase().includes(searchkey)||
  location.SecondDestination.toLowerCase().includes(searchkey)||
  location.ThirdDestination.toLowerCase().includes(searchkey)||
  location.EndDestination.toLowerCase().includes(searchkey)
  )
  this.setState({locations:result})
}

handleSearchArea = (e) =>{

  const searchkey= e.currentTarget.value;

  axios.get("/locations").then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existinglocations,searchkey)
    }  
  })
}

  render(){
    return (

        <div className='container'>
            <br/><br/>
       <center> <h3><b>Routes Details</b></h3></center><br/>
            <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Bus No.</th>
              <th scope="col">Starting Location</th>
              <th scope="col">First Destination</th>
              <th scope="col">Second Destination</th>
              <th scope="col">Third Destination</th>
              <th scope="col">End Destination</th>
              
            </tr>
          </thead><br/>
          <tbody>
            {this.state.locations.map((locations,index) =>(
              <tr Key={index}>
                <th scope="row">{index+1}</th>
                <td>{locations.BusNo}</td>
                <td>{locations.StartingLocation}</td>
                <td>{locations.FirstDestination}</td>
                <td>{locations.SecondDestination}</td>
                <td>{locations.ThirdDestination}</td>
                <td>{locations.EndDestination}</td>
                

              </tr>

            ))}
          </tbody>
       </table><br/><br/><hr></hr><br/><br/>
       

       
        
      </div>
    )
  }
}