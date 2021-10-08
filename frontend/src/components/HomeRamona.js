import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
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

onDelete = (id) =>{

  axios.delete(`/post/deleteRamona/${id}`).then((res) =>{
    alert("Deleted successfully!");
    this.retrievePosts();
  })
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
                    <h2 style={{color:'white', textAlign:'center'}}>Driver Details of Travel Express Bus Management System</h2>
                      <br/> <br/>
                      <img src="/driver.jpg" style={{height:'500px', width:'100%'}}/>
  

          
          <p><b><h2>List of Registered Drivers</h2></b></p>
          
          <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="search for drivers"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
          </div>
        <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/>
       <table className="table">
         
        <thead style={{color:'silver'}}>
        <tr>
          <th scope="col"><h6><i>No.</i></h6></th>
          <th scope="col"><h6><i>Full Name</i></h6></th>
          <th scope="col"><h6><i>NIC</i></h6></th>
          <th scope="col"><h6><i>Mobile No.</i></h6></th>
          <th scope="col"><h6><i>License</i></h6></th>
          <th scope="col"><h6><i>Address</i></h6></th>
          <th scope="col"><h6><i>Type</i></h6></th>
          <th scope="col"><h6><i>Working Hours</i></h6></th>
          <th scope="col"><h6><i>Action</i></h6></th>
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
            <td style={{color:'white'}}>{posts.licenseNo}</td>
            <td style={{color:'yellow'}}>{posts.driverAddress}</td>
            <td style={{color:'white'}}>{posts.type}</td>
            <td style={{color:'yellow'}}>{posts.workingHours}</td>
            <td>

            <a className = "btn btn-warning" href={`/editRamona/${posts._id}`}>
                <i className ="fas fa-edit"></i>&nbsp;Edit&nbsp;&nbsp;&nbsp;   
            </a>
            &nbsp;
            <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
          
            </td>

            </tr>

          ))}

        </tbody>

         </table>  
        

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <button className="btn btn-secondary btn-lg"><a href="/addRamona" style={{textDecoration:'none' ,color:'white'}}> + Add New Driver</a></button>
         
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <button className="btn btn-secondary btn-lg"><a href="/assign" style={{textDecoration:'none' ,color:'white'}}> + Assign drivers for trips</a></button> 
            <br/><br/>
            
            

      </div>
      </div>
      
    )
  }
}