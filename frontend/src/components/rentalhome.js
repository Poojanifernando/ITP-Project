import React, { Component } from  'react';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


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
      <div>

      <div style={{backgroundColor: "#080523"}}>
<div>
   

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

     <table   id ="table-to-axls-anodya" border = "4" className = "table" style={{backgroundColor: "#EBE6DC"}}>
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
<center>
     <button className="btn btn-success" ><a href = "/cost" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} >New Calculation</a></button>
    </center>
    <br/>
    <center>
    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    className="btn btn-success"
                    table="table-to-axls-anodya"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS file"/>
                    </center>
    <br/><br/>  <br/><br/>  <br/><br/>
    


    </div>
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