import React, { Component } from 'react';
import axios from 'axios';

export default class assign extends Component {
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
    axios.get("/postsRamona").then(res=>{  //posts->postsRamona
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
  post.type.toLowerCase().includes(searchKey)||
  post.tripID.toLowerCase().includes(searchKey)||
  post.availability.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("/postsRamona").then(res=>{    //posts->postsRamona
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    }
  });

}

  render() {
    return (

      <div className="container">
        <div className ="row">
          <div className="assign">
          <br/>
          <div style={{height:'100px', width:'100%', backgroundColor:"#260248", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Assignment of Drivers to Scheduled / Special Service Trips</h2>
                    <div className="container" style={{marginLeft:"28%"}}>
                        
                    </div>
          </div>

        <br/>
          <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
          
        
       <table className="table">
         
        <thead>
        <tr style={{color:'black'}}>
          <th scope="col">#</th>
          <th scope="col">Driver Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">License No</th>
          <th scope="col">Driver Type</th>
          <th scope="col">Working Hours</th>
          <th scope="col">Assigned Trip ID</th>
          <th scope="col">Availability</th>
          <th scope="col">Action</th>
        </tr>
        </thead>

        <tbody>

          {this.state.posts.map((posts,index) =>(


            <tr key={index}>

            <th scope="row">{index+1}</th>
            <td>
                <a href={`/postRamona/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.driverName}
                </a>
            </td>
   
            <td>{posts.driverPhone}</td>
            <td>{posts.licenseNo}</td>
            <td>{posts.type}</td>
            <td>{posts.workingHours}</td>
            <td>{posts.tripID}</td>
            <td>{posts.availability}</td>
            <td>

            <a className = "btn btn btn-outline-dark" href={`/assignTrips/${posts._id}`}>
                <i className ="fas fa-edit"></i>&nbsp;Update Trips
            </a>
            &nbsp;
        
          
            </td>

            </tr>

          ))}

        </tbody>

         </table>  
        
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-secondary btn-lg"><a href="/HomeRamona" style={{textDecoration:'none' ,color:'white'}}> View Driver Details</a></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-secondary btn-lg"><a href="/HomePasindu" style={{textDecoration:'none' ,color:'white'}}> View Trip Details</a></button>
           
            </div>
      </div>
      </div>
    )
  }
}