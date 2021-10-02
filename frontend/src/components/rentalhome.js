import React, { Component } from  'react';
import axios from 'axios';


export default class rentalhome extends Component{
constructor(props){
  super(props);

  this.state= {
    rentalcost: []
  };
}

componentDidMount(){
  this.retrieveRentalcost();
}

retrieveRentalcost(){
  axios.get("http://localhost:8000/rentalcost").then(res =>{
    if(res.data.success){
      this.setState({
        rentalcost:res.data.existingRentalcost
      });
    
      console.log(this.state.rentalcost)
    }
  });
}


onDelete = (id) =>{

  axios.delete(`http://localhost:8000/rentalcost/delete/${id}`).then((res)=>{
      alert("Delete successfully");
      this.retriveRentalcost();
        
  })
}

  
handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;
     
  axios.get(`http://localhost:8000/rentalcost`).then(res =>{
      if(res.data.success){
          this.filterData(res.data.existingRentalcost,searchKey)
      }
  });

}


filterData(rentalcost,searchKey){
  const result = rentalcost.filter((rentalcost) =>
  rentalcost.Busid.toLowerCase().includes(searchKey)
  )

  this.setState({rentalcost:result})
}
  render(){
    return (

      <div style={{backgroundColor: "#080523"}}>
<div>
      <div>
      <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div className="container"><a className="navbar-brand" href="#" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Travelling Express</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link "href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Drivers</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Scheduled Trips</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Special Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Company Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/cost" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Rental Bus Details </a></li>
                    <li className="nav-item"><a className="nav-link" href="/homepage" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Manage Locations</a></li>
                </ul>
                
                <a className="btn btn-light action-button" role="button" href="#" style={{fontsize:'15px', background: 'rgb(69,27,158)' ,color: 'rgb(255,255,255)'}}>Logout</a>
            </div>
        </div>
    </nav>

  

</div>

      

   

      <div className="container">
      <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <p> <h2  style={{color: " #EBEBEB" }}><center>Rental-Bus Cost Calculation</center></h2> </p>
          </div>
        <div className="col-lg-9 mt-2 mb-2">
          <input
          className="form-control"
          type="search"
          placeholder="search"
          name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
        </div>
      </div>
      <div>
       
              
            </div>

   
  <div>   <h3><p  style={{color: " #EBEBEB" }}>Calculated Rental-cost details</p></h3></div>

     <table border = "4" className = "table" style={{backgroundColor: "#EBE6DC"}}>
       <thead>
         <tr>
           <th scope = "col">#</th>
           <th scope = "col">Busid</th>
           <th scope = "col">OwnerName</th>
           <th scope = "col">NationalID</th>
           <th scope = "col">Amountperkm</th>
           <th scope = "col">Numberofkms</th>
           <th scope = "col">Totalcost</th>
          
           
         </tr>
       </thead>
        <tbody>

          {this.state.rentalcost.map((rentalcost,index) =>(
            <tr key ={index}>
              <th scope = "row">{index+1}</th>
              <td>
                    <a href = {`/rentalcostdetails/${rentalcost._id}`} style = {{textDecoration:'none'}}>
                  
                      
                   
                        
              {rentalcost.Busid} </a>  
              </td>
              <td>{rentalcost.OwnerName}</td>
              <td>{rentalcost.NationalID}</td>
              <td>{rentalcost.Amountperkm}</td>
              <td>{rentalcost.Numberofkms}</td>
              <td>{rentalcost.Totalcost}</td>
              
              <td>

              <a className="btn btn-warning" href={`/editrentalcost/${rentalcost._id}`}>
                  <i className = "fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="/rentalhome" onClick={()=> this.onDelete(rentalcost._id)}>
                  <i className = "far fa-trash-alt"></i>&nbsp;Delete
                  </a>
              </td>
              
            </tr>
          )
          )}
        </tbody>

     </table>
    
    


    </div>
     </div>    
  </div> 
    )
}

}
// {`/post/${posts._id}`}