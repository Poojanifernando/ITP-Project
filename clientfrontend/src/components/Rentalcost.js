import React, { Component} from 'react';
import axios from 'axios'
import { Form, Col, Row } from "react-bootstrap";


export default class Rentalcost extends Component{

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
    const {Busid,OwnerName, NationalID, Amountperkm, Numberofkms, Totalcost} = this.state;

    const data ={
      Busid : Busid,
      OwnerName : OwnerName,
      NationalID : NationalID,
      Amountperkm : Amountperkm,
      Numberofkms : Numberofkms,
      Totalcost : Totalcost,
   
    }
   
    axios.post(`http://localhost:8000/rentalcost/save`,data).then((res)=>{
      if(res.data.success){
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



    exe1(){
      console.log("Amountperkm: ", this.state.Amountperkm, " - Numberofkms: ", this.state.Numberofkms)
      this.setState({ Totalcost: parseInt(this.state.Amountperkm) * parseInt(this.state.Numberofkms) })
      console.log(this.state)
    }



    render()
{
        return(
          <div>
            
      <div style={{backgroundColor: "#080523"}}>
          <div>

        
            </div>
      

<div>

    <h1 className = "container"><center style={{color: " #EBEBEB",  fontweight : "500px"}}>Rental cost Calculation</center></h1>

    <br/><br/>
    <center>
    <table border = "4" width = "1100px" height = "600px" style={{backgroundColor: "#EBE6DC",  margin: "20px"}}>
      <tr>
        <th>
   <form>

  <Row>
    <Col>
    <Form.Label>Add Bus ID : </Form.Label>
      <Form.Control placeholder="Bus id" 
     onChange={ (eve) => { this.setState({ Busid: eve.target.value }) } }/>
    </Col>
    <Col>
    <Form.Label>Add Bus Owner Name : </Form.Label>
      <Form.Control placeholder="Bus owner name" 
    
    onChange={ (eve) => { this.setState({ OwnerName: eve.target.value }) } }/>
    </Col>
    <Col>
    <Form.Label>Add National ID : </Form.Label>
      <Form.Control placeholder=" bus owner's national id number" 
   
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
                    placeholder="12.00/="
                    onChange={ (eve) => { this.setState({ Amountperkm: eve.target.value }) } }
                   // onChange={this.handleInputChange}
                    editable = {false}
                    />
                </div>

               

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Number of Kilometers : </label>
                    <input type="text"
                    className="form-control"
                    placeholder="kms"
                    value={this.state.Numberofkms}
                    onChange={ (eve) => { this.setState({ Numberofkms: eve.target.value })} }
                    // onChange={this.handleInputChange}
                   
                    />

            
           
                <br/><br/>

              
                

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}><h4>Total Rental cost : </h4></label>
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
  
 <center>
<Row>
  <Col>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}   onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;Save Details
                        </button>
                        </Col>
                        <br/>   <br/>
                        <Col>
                   
                    <button className="btn btn-success" ><a href = "/rentalhome" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} >send Details</a></button>
</Col>
</Row>    
</center>
    </div>
  
</div>





        )



     }

}
















