import React, { Component } from 'react';
import axios from 'axios';

export default class tripsDrivers extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}


  retrievePosts(){
    axios.get("/postsRamona").then(res=>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
      console.log(this.state.posts);

      }
    });
  }

  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.driverName.toLowerCase().includes(searchKey)||
    post.driverNIC.toLowerCase().includes(searchKey)||
    post.type.toLowerCase().includes(searchKey)
    )
  
    this.setState({posts:result})
  }
  
  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
  
    axios.get("/postsRamona").then(res=>{
      if(res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  
  }

  render() {
    return (
      
        <div className ="row">
        <div className="home">
        <div style={{height:'100px', width:'100%', backgroundColor:"#260248", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Details of the Trips assigned to Drivers</h2>
                      <br/> <br/>
                      <img src="/driver2.jpg" style={{height:'500px', width:'100%'}}/>

                      <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="search for your trips"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
          </div>
        <br/><br/><br/><br/><br/><br/>  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  <br/><br/><br/><br/><br/><br/>

        <table className="table">
         
        <thead style={{color:'silver'}}>
        <tr>
          <th scope="col"><h6><i>No.</i></h6></th>
          <th scope="col"><h6><i>Name of the Driver</i></h6></th>
          <th scope="col"><h6><i>NIC</i></h6></th>
          <th scope="col"><h6><i>Mobile No.</i></h6></th>
          <th scope="col"><h6><i>Type</i></h6></th>
          <th scope="col"><h6><i>Working Hours</i></h6></th>
          <th scope="col"><h6><i>Assigned Trip ID</i></h6></th>
          <th scope="col"><h6><i>Availability</i></h6></th>
          <th scope="col"><h6><i>Confirmation</i></h6></th>
        </tr>
        </thead>

        <tbody>

          {this.state.posts.map((posts,index) =>(


            <tr key={index}>

            <th  style={{color:'silver'}}scope="row">{index+1}</th>
            <td>
                <a href={`/postRamona/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.driverName}
                </a>
            </td>
            <td style={{color:'white'}}>{posts.driverNIC}</td>
            <td style={{color:'yellow'}}>{posts.driverPhone}</td>
            <td style={{color:'white'}}>{posts.type}</td>
            <td style={{color:'yellow'}}>{posts.workingHours}</td>
            <td style={{color:'white'}}>{posts.tripID}</td>
            <td style={{color:'yellow'}}>{posts.availability}</td>
            <td>

            
            <a className="btn btn-danger" href={`/response/${posts._id}`}>
              &nbsp;Respond
            </a>
          
            </td>

            </tr>

          ))}

        </tbody>

         </table>  
        

       

      </div>
      </div>
    
    )
  }
}