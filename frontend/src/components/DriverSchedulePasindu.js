import React, { Component } from 'react';
import axios from 'axios';

export default class DriverSchedulePasindu extends Component {
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
              <div >
              <br/>
            <br/>
            <center> <h3><b>Driver Details</b></h3></center><br/>
              <div className="col-lg-9 mt-2 mb-2">
                  <input
                  className="form-control"
                  type="search"
                  placeholder="search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}>
                  </input>
                </div>
              
            
           <table className="table table-dark">
             
            <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Driver Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">License No</th>
              <th scope="col">Driver Type</th>
              <th scope="col">Working Hours</th>
              <th scope="col">Assigned Trip ID</th>
              <th scope="col">Availability</th>
              
            </tr>
            </thead>
    
            <tbody>
    
              {this.state.posts.map((posts,index) =>(
    
    
                <tr key={index}>
    
                <th scope="row">{index+1}</th>
                <td>
                    
                    {posts.driverName}
                   
                </td>
       
                <td>{posts.driverPhone}</td>
                <td>{posts.licenseNo}</td>
                <td>{posts.type}</td>
                <td>{posts.workingHours}</td>
                <td>{posts.tripID}</td>
                <td>{posts.availability}</td>
                
    
                </tr>
    
              ))}
    
            </tbody>
    
             </table>  
            
        
                </div>
              
          </div>
        
          </div>
        )
      }
    }