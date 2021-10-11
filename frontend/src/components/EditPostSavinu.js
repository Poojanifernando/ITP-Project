import React,{Component} from'react';
import axios from 'axios';

export default class EditPost extends Component{

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

        if (nam=== "name") {
        
            if (Number(val)) {
              alert("Dont input letters");
            }
          }

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

        const id = this.props.match.params.id;
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


        // update a specific post 

        axios.put(`/postSavinu/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Updated Successfully!!")
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

    componentDidMount(){

        const id = this.props.match.params.id;

        // to retrive the data we are going to update
        axios.get(`/postSavinu/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    name:res.data.postSavinu.name,
                    employee:res.data.postSavinu.employee,
                    address:res.data.postSavinu.address,
                    contact_number:res.data.postSavinu.contact_number,
                    nic:res.data.postSavinu.nic,
                    salary:res.data.postSavinu.salary,
                    bank_number:res.data.postSavinu.bank_number,
                    user_name:res.data.postSavinu.user_name
                });

                console.log(this.state.postSavinu);
            }

        });
    }

    
    render(){
        return(

                <div style={{height:"100%", width:"100%",  backgroundColor:"Silver", marginBottom:'15px'}}> 
                <div className="col-md-8 mt-4 mx-auto"  >
                
                <h1 className="h3 mb-3 font-weight-normal" ><center>Update Payment Profile</center></h1>

                <form className="needs-validation" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b> Name </b> </label>
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

                   <center> <button className="btn btn-success" type="submit" style={{marginTop:'20px', marginBottom:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update 
                    </button>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <button type="button" className="btn btn-success" style={{marginTop:'20px', marginBottom:'15px'}} title="Go back">
                        <a href="/HomeSavinu" style={{textDecoration:'none' , color:'white'}}>Go back</a>
                    </button>
                    </center>

                </form>

            </div>
            </div>
        )
    }
}
