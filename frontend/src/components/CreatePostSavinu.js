import React,{Component} from'react';
import axios from 'axios';


export default class CreatePostSavinu extends Component{

    constructor(props){
        super(props);
        this.state ={
            name:"",
            employee:"",
            address:"",
            contact_number:"",
            nic:"",
            salary:"",
            bank_number:"",
            user_name:""
        }
    }

    //If any change occurs in frontend invoke onchange and saves the differ
    handleInputChange =(e) =>{
        const {name, value} = e.target;

        let nam = e.target.name;
        let val = e.target.value;

        if(nam==="contact_number"){

            if(!Number(val)){
                alert("Cannot input letters");
            }
        }

        if(nam==="contact_number"){
            if(val.length > 10){
                alert("Invalid Contact number!!");
            }
        }

        if(nam==="nic"){
            if(val.length > 12){
                alert("Invalid NIC!!");
            }
        }

        this.setState({
            ...this.state,
            [name]:value // set
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();

        
        const {name,employee,address,contact_number,nic,salary,bank_number,user_name} = this.state;

        const data = {
            name:name,
            employee:employee,
            address:address,
            contact_number:contact_number,
            nic:nic,
            salary:employee*27500,
            bank_number:bank_number,
            user_name:user_name
        }

        console.log(data)

        axios.post("/postSavinu/save",data).then((res) =>{
            if(res.data.success){
                alert("Saved Successfully!!")
                this.setState(
                    {
                        name:"",
                        employee:"",
                        address:"",
                        contact_number:"",
                        nic:"",
                        salary:"",
                        bank_number:"",
                        user_name:""
                    }
                )
            }
        })

    }
    
    render(){ 
        return(

            <div style={{height:"100%", width:"100%",  backgroundColor:"Silver", marginBottom:'10px'}}>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal"><center>Create New Payment Profile</center></h1>
                
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}><b> Name </b></label>
                        <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                    </div>
                
                
                    <div className="form-group" style={{marginBottom:'15px'}} >            
                       <label style={{marginBottom:'5px'}}><b> Employee Type (Drivers = 1, Admin = 2, Manager = 3) </b></label>
                       <input type="text"
                       list="eType"
                       className="form-control"
                       name="employee"
                       placeholder="Employee Type"
                       value={this.state.employee}
                       onChange={this.handleInputChange}/>
                       <datalist id="eType">
                           <option value="1"></option>
                           <option value="2"></option>
                           <option value="3"></option>
                       </datalist>
                   </div>
                
                
                
                
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b> Address </b> </label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                    </div>
                
                
                
                
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b> Contact Number </b> </label>
                        <input type="text"
                        className="form-control"
                        name="contact_number"
                        placeholder="Enter Contact Number"
                        value={this.state.contact_number}
                        onChange={this.handleInputChange}/>
                    </div>
                
                
                
                
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b> NIC </b> </label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter NIC Number"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                    </div>
                
                
                
                
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b> Bank Number </b> </label>
                        <input type="text"
                        className="form-control"
                        name="bank_number"
                        placeholder="Enter Bank Account Number"
                        value={this.state.bank_number}
                        onChange={this.handleInputChange}/>
                    </div>
                
                
                
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b> User Name </b> </label>
                        <input type="text"
                        className="form-control"
                        name="user_name"
                        placeholder="Enter User Name"
                        value={this.state.user_name}
                        onChange={this.handleInputChange}/>
                    </div>
            
                  <center>
                        <button className="btn btn-success" type="submit" style={{marginTop:'20px', marginBottom:'15px'}} 
                    onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

                        &nbsp;
                        &nbsp;
                        &nbsp;
                        
                    <button type="button" className="btn btn-success" style={{marginTop:'20px', marginBottom:'15px'}} title="View Details">
                        <a href="/HomeSavinu" style={{textDecoration:'none' , color:'white'}}>View saved Details</a>
                    </button>

                    </center>
                    <br/>
                    <br/>

                </form>

            </div>
            </div>
        )
    }
}
