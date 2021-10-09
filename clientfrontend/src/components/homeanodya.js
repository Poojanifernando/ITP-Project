import React, { Component } from  'react';
import axios from 'axios';
import { Col, Row } from "react-bootstrap";


export default class homeanodya extends Component{
constructor(props){
  super(props);

  this.state= {
    postAnodya: []
  };
}

componentDidMount(){
  this.retrievePostAnodya();
}

retrievePostAnodya(){
  axios.get("http://localhost:8000/postAnodya").then(res =>{
    if(res.data.success){
      this.setState({
        postAnodya:res.data.existingPostAnodya
      });
    
      console.log(this.state.postAnodya)
    }
  });
}


onDelete = (id) =>{

  axios.delete(`http://localhost:8000/postAnodya/delete/${id}`).then((res)=>{
      alert("Delete successfully");
      this.retrivePostAnodya();
        
  })
}

  
handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;
     
  axios.get(`http://localhost:8000/postAnodya`).then(res =>{
      if(res.data.success){
          this.filterData(res.data.existingPostAnodya,searchKey)
      }
  });

}


filterData(postAnodya,searchKey){
  const result = postAnodya.filter((postAnodya) =>
  postAnodya.OwnerName.toLowerCase().includes(searchKey)
  )

  this.setState({postAnodya:result})
}
  render(){
    return (


<div>

<div>

<div style={{backgroundColor: "#080523"}}>




 
      <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <center>
          <p><h1 className = "t1"><center  style={{color: " #EBEBEB",  fontweight : "500px"}}> Rental Bus Registration</center></h1></p>
          </center>
          </div>
          <center>
        <div className="col-lg-9 mt-2 mb-2">
          <input
          className="form-control"
          type="search"
          placeholder="Search your details only"
          name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
        </div>
        </center>
        <center>
        <div className="form-text"  style={{color: " #EBEBEB" }}>Please search by your name that given in the registration</div>
      </center>
      </div>
      <br/>
      <div>
        <table>
          <tr><th>
           
                <img src="/bus1.png" class="mx-auto" alt="" width="1500px" height="400px"/></th>
                

                </tr>
                </table>
            </div>

   

   <br/>
     <p className = "t2"><center  style={{color: " #EBEBEB" }}>Your registered details are appearing here. Pleasce check them. </center></p>
<br/>
<center>
     <table border = "4" width = "1400px" height = "500px" style={{backgroundColor: "#EBE6DC"}}> 
       <thead>
         <tr>
           <th scope = "col">id</th>
           <th scope = "col">OwnerName</th>
           <th scope = "col">Age</th>
           <th scope = "col">NationalID</th>
           <th scope = "col">Address</th>
           <th scope = "col">city</th>
           <th scope = "col">Province</th>
           <th scope = "col">ContactNumber</th>
           <th scope = "col">Email</th>
         </tr>
       </thead>
        <tbody>

          {this.state.postAnodya.map((postAnodya,index) =>(
            <tr key ={index}>
              <th scope = "row">{index+1}</th>
              <td>
               
              {postAnodya.OwnerName} 
              </td>
              <td>{postAnodya.Age}</td>
              <td>{postAnodya.NationalID}</td>
              <td>{postAnodya.Address}</td>
              <td>{postAnodya.city}</td>
              <td>{postAnodya.Province}</td>
              <td>{postAnodya.ContactNumber}</td>
              <td>{postAnodya.Email}</td>
              <td>


              <a className="btn btn-warning" href={`/editanodya/${postAnodya._id}`}>
                  <i className = "fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="/homeanodya" onClick={()=> this.onDelete(postAnodya._id)}>
                  <i className = "far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                
              </td>
              
            </tr>
          )
          )}
        </tbody>

     </table>
     </center>
     <br/>
     <div>

     </div>  
     <center>
     <button className = "btn btn-success"><a href = "/createpostsanodya" style = {{textDecoration:'none',color:'white'}}>Back to Registration</a></button>
      </center>
      <br/><br/>
</div>

    
    
    
     </div>
       
     

<div>

<footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"-10px",height:"170px"}}>

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
</div>

















    )
}

}
// {`/post/${posts._id}`}
//<a href = {`/postsdetails/${postAnodya._id}`} style = {{textDecoration:'none'}}></a>