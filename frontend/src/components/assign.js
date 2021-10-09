import React, { Component } from 'react';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

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
          
        
       <table id="table-to-xlsRamona" className="table">
         
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
            <button className="btn btn-primary btn-lg" style={{textDecoration:'none' ,color:'white'}}><ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xlsRamona"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/></button>
      </div>
      <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginLeft:"-120px", marginTop:"40px",height:"170px",marginRight:"-120px"}}>

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
            
            <div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> Travelling Express</a>
            </div>

            </footer>
      </div>
    )
  }
}