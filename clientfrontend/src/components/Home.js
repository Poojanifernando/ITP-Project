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
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All Bus No and Locations</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="SearchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
      </div>
            
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bus No.</th>
              <th scope="col">Starting Location</th>
              <th scope="col">First Destination</th>
              <th scope="col">Second Destination</th>
              <th scope="col">Third Destination</th>
              <th scope="col">End Destination</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.locations.map((locations,index) =>(
              <tr Key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/locations/${locations._id}`} style={{textDecoration:'none'}}>
                    {locations.BusNo}
                    </a>
                </td>
                <td>{locations.StartingLocation}</td>
                <td>{locations.FirstDestination}</td>
                <td>{locations.SecondDestination}</td>
                <td>{locations.ThirdDestination}</td>
                <td>{locations.EndDestination}</td>
                <td>
                  <a className="btn btn-warning btn-xs" href={`/editazmie/${locations._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a> 
                  &nbsp;
                  <a className="btn btn-danger btn-xs" href="#"onClick={() =>this.onDelete(locations._id)}>
                    <i className="far fa-solid fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>  

              </tr>

            ))}
          </tbody>
       </table>
       
        <button className="btn btn-success btn-xs"><a href="/addazmie" style={{textDecoration:'none',color:'white'}}>Add New Location</a></button>

      </div>
    )
  }
}