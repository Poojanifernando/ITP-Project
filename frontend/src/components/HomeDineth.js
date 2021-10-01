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
              <th scope="col">#</th>
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
      </div></div>
    )
  }
}
