import React, { Component } from 'react';
import axios from 'axios';
import './card.css';

export default class HomeDineth extends Component {
constructor(props){
  super(props);
  this.state={
    postsDineth:[]
  };

}

componentDidMount(){
  this.retrieveCards();
}

retrieveCards(){
  axios.get("http://localhost:8000/postsDineth").then(res =>{
    if(res.data.success){
      this.setState({
        postsDineth:res.data.existingCards
      });

      console.log(this.state.postsDineth);
    }
  });
}

onDelete = (id)=>{
  axios.delete(`/post/deleteDineth/${id}`).then((res)=>{
    alert("Deleted Successfully!");
    this.retrieveCards(); //retrieve rest card list
  })
}


filterData(postsDineth,searchKey){
  const result =postsDineth.filter((postDineth) =>
    postDineth.fname.toLowerCase().includes(searchKey) ||
    postDineth.address.toLowerCase().includes(searchKey) ||
    postDineth.nic.includes(searchKey)
    
  )

  this.setState({postsDineth:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/postsDineth").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingCards,searchKey)
    }
  });
}


  render() {
    return (
      <div style={{backgroundColor:"white", height:"680px"}}>

        <div className="row" style={{height:'120px', width:'102%',backgroundColor:"#080523"}}>
          <div className="col-lg-9 mt-2 mb-2">
            <h3 style={{color:"white",marginLeft:"60px", marginTop:"10px"}}>Season Card Users</h3>
            <h4 className="mt-2" style={{color:"#49A8F1", marginLeft:"380px"}}>Search here to find you, use your name or address....</h4>
          </div>
          <div className="col-lg-2 mt-5 mb-2" style={{marginTop:"80px"}}>
            <input
            className="form-control"
            type="search"
            placeholder="Search here"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>

        <div> 
        <div class="sidenav" style={{backgroundColor:'white',marginLeft:"1020px",marginTop:"70px",height:'300px',width:'320px',overflowX:"hidden",paddingtop: '20px'}}> 
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"> 
                <img src="/images/secard.png" style={{height:'138px', width:'255px', marginTop:"75px", marginLeft:"30px"}}/>    
              </div>
              <div class="flip-card-back">
              <img src="/images/secard.png" style={{height:'138px', width:'255px', marginTop:"75px", marginLeft:"30px"}}/> 
              </div>
            </div>    
          </div>
        
        </div>
        
        <table className="table table-hover, container" style={{marginTop:'-300px',marginLeft:"220px", width:"650px",alignContent:"center"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Address</th>
              <th scope="col" style={{paddingLeft:"45px"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.postsDineth.map((postsDineth, index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/card/${postsDineth._id}`} style={{textDecoration:'none'}}>
                    {postsDineth.fname}
                    </a>    
                </td>
                <td>
                  {postsDineth.address}
                </td>
                <td>
                  <a className="btn btn-warning" href={`/editCard/${postsDineth._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>&nbsp;&nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(postsDineth._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>&nbsp;&nbsp;
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br/><br/><br/>
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
