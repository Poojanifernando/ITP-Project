import React, { Component } from 'react';
import axios from 'axios';


export default class ChargeHome extends Component {
constructor(props){
  super(props);
  this.state={
    postsCharge:[]
  };

}

componentDidMount(){
  this.retrieveCards();
}

retrieveCards(){
  axios.get("http://localhost:8000/postsCharge").then(res =>{
    if(res.data.success){
      this.setState({
        postsCharge:res.data.existingCharge
      });

      console.log(this.state.postsCharge);
    }
  });
}

onDelete = (id)=>{
  axios.delete(`/post/deleteCharge/${id}`).then((res)=>{
    alert("Deleted Successfully!");
    this.retrieveCards(); //retrieve rest card list
  })
}


filterData(postsCharge,searchKey){
  const result =postsCharge.filter((postCharge) =>
    postCharge.holdername.toLowerCase().includes(searchKey)
    
    
  )

  this.setState({postsCharge:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/postsCharge").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingCharge,searchKey)
    }
  });
}


  render() {
    return (
      <div style={{backgroundColor:"white", height:"680px"}}>

        <div className="row" style={{height:'120px', width:'102%',backgroundColor:"#080523"}}>
          <div className="col-lg-9 mt-2 mb-2">
            <h3 style={{color:"white",marginLeft:"60px", marginTop:"10px"}}>Season Card Recharge</h3>
            <h4 className="mt-2" style={{color:"#49A8F1", marginLeft:"450px"}}>Search here to find you, use your name....</h4>
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

        
        <table className="table table-hover, container" style={{marginTop:'50px',marginLeft:"380px", width:"650px",alignContent:"center"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Card holder name</th>
              <th scope="col">Amount</th>
              <th scope="col" style={{paddingLeft:"0px"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.postsCharge.map((postsCharge, index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td> 
                    {postsCharge.holdername}
                </td>
                <td>
                  {postsCharge.amount+postsCharge.newamount}
                </td>
                
               
                <td>
                  <a className="btn btn-primary" href={`/editCharge/${postsCharge._id}`}>
                    <i className="fas">Re-charge</i>&nbsp;
                  </a>&nbsp;&nbsp;
                  
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br/><br/><br/>

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
