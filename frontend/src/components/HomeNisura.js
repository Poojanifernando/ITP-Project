import React, { Component } from 'react';
import axios from 'axios';



export default class HomeNisura extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };

  }
  componentDidMount(){
    this.retrivePosts();
  }

  retrivePosts(){
    axios.get("/postsNisura").then(res=>{
      if (res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }
   
  onDelete=(id) =>{
    axios.delete(`/postNisura/delete/${id}`).then((res) =>{
      alert("Deleted Successfully");
      this.retrivePosts();
    })

  }

  filterData(posts,searchKey){
    const result =posts.filter((post) =>
      post.fname.toLowerCase().includes(searchKey) ||
      post.address.toLowerCase().includes(searchKey)
      
    )
  
    this.setState({posts:result})
  }
  
  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8000/postsNisura").then(res =>{
      if(res.data.success){
  
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }
  
  
  

  render() {
    return (
      <div>
        <div style={{height:'100%', width:'100%', backgroundColor:"#adadad"}}>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h3 style={{color:"blue"}} className="container"><center>ALL BOOKINGS</center></h3>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search your name here"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
        <h4 style={{color:"red"}}> <p>Click on your name to check your Booking Details and Payment Details</p></h4>
        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Address</th>
              <th scope="col">Contact No</th>
              <th scope="col">Starting Point</th>
              <th scope="col">Ending Point</th>
              <th scope="col">No Of Passengers</th>
              <th scope="col">Date</th>
              <th scope="col">Distance</th>
              <th scope="col">Trip Cost</th>
              <th scope="col">Actions</th>
              
           

            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/Nisura/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.fname}
                    </a>
                    
                </td>
                <td>{posts.nic}</td>
                <td>{posts.address}</td>
                <td>{posts.contactNo}</td>
                <td>{posts.startingPoint}</td>
                <td>{posts.endingPoint}</td>
                <td>{posts.noOfPassengers}</td>
                <td>{posts.date}</td>
                <td>{posts.distance}Km</td>
                <td>Rs.{posts.price}</td>
                <td>
                <a className= "btn btn-warning" href={`/edit/${posts._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

                </td>

              </tr>
            

            ))}




          </tbody>
        </table>
        <button className="btn btn-success"><a href="/niss" style={{textDecoration:'none', color:'white'}}>Create New Booking</a></button> 
      </div>

      <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"00px",height:"170px"}}>

<div>

    <div class="row" style={{marginLeft:"525px",height:"100px"}}>

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
    <a href="https://google.com/"> Travelling Express</a>
</div>

</footer>

      </div>
    )
     
  }
}

