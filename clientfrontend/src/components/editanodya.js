import React, {Component} from 'react'
import axios from 'axios';
import { Col, Row } from "react-bootstrap";


export default class edit extends Component {
    constructor(props){
        super(props);
      
        this.state= {
            postAnodya:{
                
            OwnerName:"",
            Age:"",
            NationalID:"",
            Address:"",
            city:"",
            Province:"",
            ContactNumber:"",
            Email:""
          }
        };
      }


      handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const id =  this.props.match.params.id;
        const {OwnerName,Age, NationalID, Address, city, Province, ContactNumber, Email} = this.state;

        const data ={
          OwnerName : OwnerName,
          Age : Age,
          NationalID : NationalID,
          Address : Address,
          city : city,
          Province : Province,
          ContactNumber : ContactNumber,
          Email : Email
        }
       
        axios.put(`http://localhost:8000/postAnodya/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("data updated successfully.......")
                this.setState(
                    {
                      OwnerName: "",
                      Age:"",
                      NationalID: "",
                      Address:"",
                      city:"",
                      Province :"",
                      ContactNumber:"",
                      Email:""
                    }
                )
            }
        })
  
    }



    getUsersData() {
        const id =  this.props.match.params.id;
        axios.get(`http://localhost:8000/postAnodya/${id}`)
            .then(res => {
                if(res.data.success){
                    
                    this.setState({
                        OwnerName:res.data.postAnodya.OwnerName,
                        Age:res.data.postAnodya.Age,
                        NationalID:res.data.postAnodya.NationalID,
                        Address:res.data.postAnodya.Address,
                        city:res.data.postAnodya.city,
                        Province:res.data.postAnodya.Province,
                        ContactNumber:res.data.postAnodya.ContactNumber,
                        Email:res.data.postAnodya.Email
                    });
                
                    console.log(this.state.postAnodya);
                
                }
            });
            

    }
    componentDidMount(){
        this.getUsersData()
    }
   
    
    render() {
        return (
            <div>















              <div style={{backgroundColor: "#080523"}}>

<center>
              <table border = "4" width = "900px" height = "500px"  style={{backgroundColor: "#EBE6DC",  margin: "20px"}}>
                  <tr>
                      <th>
                <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit  Registered Details</h1>
            <h5>You can edit your registered details</h5>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Owner Name :</label>
                    <input type="text"
                    className="form-control"
                    name="OwnerName"
                    placeholder="Edit here"
                    value={this.state.OwnerName}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Age :</label>
                    <input type="text"
                    className="form-control"
                    name="Age"
                    placeholder="Edit here"
                    value={this.state.Age}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>National ID :</label>
                    <input type="text"
                    className="form-control"
                    name="NationalID"
                    placeholder="Edit here"
                    value={this.state.NationalID}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Address :</label>
                    <input type="text"
                    className="form-control"
                    name="Address"
                    placeholder="Edit here"
                    value={this.state.Address}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>city :</label>
                    <input type="text"
                    className="form-control"
                    name="city"
                    placeholder="Edit here"
                    value={this.state.city}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Province :</label>
                    <input type="text"
                    className="form-control"
                    name="Province"
                    placeholder="Edit here"
                    value={this.state.Province}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Contact  Number :</label>
                    <input type="text"
                    className="form-control"
                    name="ContactNumber"
                    placeholder="Edit here"
                    value={this.state.ContactNumber}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Email</label>
                    <input type="text"
                    className="form-control"
                    name="Email"
                    placeholder="Edit here"
                 
                    value={this.state.Email}
                    onChange={this.handleInputChange}/>
                </div>
                </form>

                </div>
<Row>
    <Col>
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Update Data
                </button>
</Col>
<Col>
</Col>
<Col>
</Col>
<Col>
                <button className = "btn btn-success"><a href = "/homeanodya" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>
                             <i className="far fa-check-square"></i>
                          Update confirm
                             </a></button>
                             </Col>
                             </Row>


           
            </th>
            </tr>
            </table>
            </center>
            
        </div>
            </div>
           
        )
    }
}
