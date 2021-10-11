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

      <div className=''><div style={{backgroundColor:"#E3E3E3"}}>
      <div>
      <img src="../images/track1png.jpg" alt=""/><br/><br/>
    <h2><center><b>All Bus No and Locations</b> </center></h2> <br></br> 

      </div><center></center>
      <br></br> 
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
        
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
            
        <table className="table table-striped table-dark">
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
                   
                    {locations.BusNo}
                   
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
      
      <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"40px",height:"170px"}}>



  

<div>

    <div class="row" style={{marginLeft:"700px",height:"100px"}}>

    <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

        <a class="fb-ic" style={{paddingLeft:"10px"}}>
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="tw-ic"  style={{paddingLeft:"20px"}}>
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="gplus-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="li-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
    
        <a class="ins-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="pin-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
        </a>
        
        </div>
    </div>

    </div>

</div>

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2021 Copyright:
    <a href="https://mdbootstrap.com/"> Travelling Express</a>
</div>

</footer>
      
       </div></div>
    )
  }
}