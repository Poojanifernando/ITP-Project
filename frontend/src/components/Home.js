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

//search

  render(){
    return (
      <div className="container">
        <div>
          <label>search</label>
        </div>
        <h4>All the Locations and Bus Numbers</h4>

        <table className="table">
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
                  <a className="btn btn-warning btn-xs" href={`/edit/${locations._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a> 
                  &nbsp;
                  <a className="btn btn-danger btn-xs" href="#"onClick={() =>this.onDelete(locations._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>  

              </tr>

            ))}
          </tbody>
       </table>
       
        <button className="btn btn-success btn-xs"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Location</a></button>

      </div>
    )
  }
}