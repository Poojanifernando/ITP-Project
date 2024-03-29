import React, { Component} from 'react';
import axios from 'axios'
import { Form, Col, Row } from "react-bootstrap";


export default class editrentalcost extends Component{

  constructor(props) {
    super(props);
    this.state = { 
 
    Busid: "",
    OwnerName:"",
    NationalID: "",
    Amountperkm:"",
    Numberofkms:"",
    Totalcost: ""
    }
   
    }

    handleInputChange = (e) =>{
      const {value} = e.target;
      this.setState({
          ...this.state,
          value
      })
  }

  onSubmit = (e) =>{
   
    e.preventDefault();
    const id =  this.props.match.params.id;
    const {Busid,OwnerName, NationalID, Amountperkm, Numberofkms, Totalcost} = this.state;

    const data ={
      Busid : Busid,
      OwnerName : OwnerName,
      NationalID : NationalID,
      Amountperkm : Amountperkm,
      Numberofkms : Numberofkms,
      Totalcost : Totalcost,
   
    }
   
    axios.put(`http://localhost:8000/rentalcost/update/${id}`,data).then((res)=>{
      if(res.data.success){
        alert("data updated successfully.......")
          this.setState(
              {
                Busid: "",
                OwnerName:"",
                NationalID: "",
                Amountperkm:"",
                Numberofkms:"",
                Totalcost:""
              }
          )
      }
  })

}

getUsersData() {
  const id =  this.props.match.params.id;
  axios.get(`http://localhost:8000/rentalcost/${id}`)
      .then(res => {
          if(res.data.success){
              
              this.setState({
                Busid:res.data.rentalcost.Busid,
                OwnerName:res.data.rentalcost.OwnerName,
                  NationalID:res.data.rentalcost.NationalID,
                  Amountperkm:res.data.rentalcost.Amountperkm,
                  Numberofkms:res.data.rentalcost.Numberofkms,
                  Totalcost:res.data.rentalcost.Totalcost,
                
              });
          
              console.log(this.state.rentalcost);
          
          }
      });

    }
    componentDidMount(){
        this.getUsersData()
    }

    exe1()
    {
      console.log("Amountperkm: ", this.state.Amountperkm, " - Numberofkms: ", this.state.Numberofkms)
      this.setState({ Totalcost: parseInt(this.state.Amountperkm) * parseInt(this.state.Numberofkms) })
      console.log(this.state)
    }



    render()
{
        return(

          <div>
          <div>
       

    <div style={{backgroundColor: "#080523"}}>    

<div>

    <h1><center style={{color: " #EBEBEB" }}>Rental cost Calculation update</center></h1>

    <br/><br/>
    <center>
    <table border = "4" width = "1100px" height = "600px" style={{backgroundColor: "#EBE6DC"}}>
      <tr>
        <th>
   <form>
  <Row>
    <Col>
    <Form.Label>Add Bus plate id : </Form.Label>
      <Form.Control placeholder="Bus plate id" 
      value={this.state.Busid}
     onChange={ (eve) => { this.setState({ Busid: eve.target.value }) } }/>
    </Col>
    <Col>
    <Form.Label>Add Bus Owner Name : </Form.Label>
      <Form.Control placeholder="Bus owner name" 
     value={this.state.OwnerName}
    onChange={ (eve) => { this.setState({ OwnerName: eve.target.value }) } }/>
    </Col>
    <Col>
    <Form.Label>Add National ID : </Form.Label>
      <Form.Control placeholder=" bus owner's national id number" 
    value={this.state.NationalID}
   onChange={ (eve) => { this.setState({ NationalID: eve.target.value }) } }/>
    </Col>
  </Row>

  <br/>  <br/>

                
  <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Amount per 1Km :</label>
                    <input type="text"
                    className="form-control"
                    //value = "Rs.12.00/="
                    value={this.state.Amountperkm}
                 
                    onChange={ (eve) => { this.setState({ Amountperkm: eve.target.value }) } }
                   // onChange={this.handleInputChange}
                    editable = {false}
                    />
                </div>

               

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Number of Kilometers</label>
                    <input type="text"
                    className="form-control"
                    placeholder="kms"
                    value={this.state.Numberofkms}
                    onChange={ (eve) => { this.setState({ Numberofkms: eve.target.value })} }
                    // onChange={this.handleInputChange}
                   
                    />

            
           
                <br/><br/>

              
                

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Total Rental cost</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.Totalcost} 
                    //onChange={this.handleInputChange}
                    />
        
          </div>
                </div>
  
  

</form>
    
    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}   onClick={()=>{this.exe1()}}>
                        <i className="far fa-check-square"></i>
                        &nbsp;Calculate
                    </button>
                    <br/><br/>

                    </th>
                    </tr>
                    </table>
                    </center>
  </div>
 
<Row>
  <Col>
  <center>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Update Data
                </button>
                </center>
                </Col>
                <Col>
                </Col>
                                    <Col>
                                    <br/>
                    <button className="btn btn-success" ><a href = "/rentalhome" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} >
                    Send Details</a></button>
    </Col>
</Row>
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
















