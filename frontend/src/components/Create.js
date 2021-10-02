import React, { Component } from 'react'
import axios from 'axios'

export default class Create extends Component {

    constructor(props){
        super(props);
        this.state={
            driverName:" ",
            driverNIC:" ",
            driverPhone:" ",
            licenseNo:" ",
            driverAddress:" ",
            type:" ",
            workingHours:" ",
            tripID:" ",
            availability:" "
        };
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;
        let nam = e.target.name;
        let val = e.target.value;
        
        //validations
        if (nam === "driverPhone") {
                if (!Number(val)) {
                    alert("Contact number must be numeric!");
            }
        }

        if (nam === "driverPhone") {
            if (e.target.value.length > 10) {
                    alert ("Contact number contains more than 10 digits..!");
            } 
        }

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        

        const {driverName,driverNIC,driverPhone,licenseNo,driverAddress,type,workingHours,tripID,availability} = this.state;

        const data ={
            driverName:driverName,
            driverNIC:driverNIC,
            driverPhone:driverPhone,
            licenseNo:licenseNo,
            driverAddress:driverAddress,
            type:type,
            workingHours:workingHours,
            tripID:tripID,
            availability:availability
        }

        console.log(data)
       
        axios.post("/postRamona/save",data).then((res)=>{  //post/save ->postRamona/save
            if(res.data.success){
                this.setState(
                    {
                        driverName:"",
                        driverNIC:"",
                        driverPhone:"",
                        licenseNo:"",
                        driverAddress:"",
                        type:"",
                        workingHours:"",
                        tripID:"",
                        availability:"" 
                    }
                )
                alert("Details added successfully");
            }
        })
  
    }

    render() {
        return (
            <div className="insert" >
            <div className="col-md-8 mt-4 mx-auto">

                <div style={{height:'200', width:'100%', backgroundColor:"#260248", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'silver', textAlign:'center'}}><img src="/add.jpg" style={{height:'15%', width:'15%'}}/>  Insertion of new drivers</h2>
                    <br/>
               </div>
            <br/>
            <form className="needs-validation" noValidate>

        <div className="row">
            <div className="form-group col-md-6">
            <label for="driverName">Name of the Driver</label>
            <input type="text" 
            className="form-control" 
            name="driverName" 
            placeholder="Enter the full name of the driver"
            value={this.state.driverName}
            onChange={this.handleInputChange} required/>
            </div>
           
            <div class="form-group col-md-6">
            <label for="driverNIC">Driver NIC</label>
            <input type="text" 
            className="form-control" 
            name="driverNIC" 
            placeholder="Enter NIC Number "
            value={this.state.driverNIC}
            onChange={this.handleInputChange} required/>
            </div>
        </div>


                <br/>

            <div className="row">
            <div className="form-group col-md-6">
            <label for="driverPhone">Contact Number</label>
            <input type="text" 
            className="form-control" 
            name="driverPhone" 
            placeholder="Enter the mobile number of the driver"
            value={this.state.driverPhone}
            onChange={this.handleInputChange} required/>
            </div>
           
            <div class="form-group col-md-6">
            <label for="licenseNo">Driving license number</label>
            <input type="text" 
            className="form-control" 
            name="licenseNo" 
            placeholder="Driving license number "
            value={this.state.licenseNo}
                    onChange={this.handleInputChange} required/>
            </div>
        </div>

                <br/>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Postal Address</label>
                    <textarea
                    className="form-control"
                    name="driverAddress"
                    placeholder="address"
                    value={this.state.driverAddress}
                    onChange={this.handleInputChange} required/>
                </div>
                <br/>


            <div className="row">
            <div className="form-group col-md-6">
            <label for="driverName">Type of the driver</label>
            <input type="text" 
            list="Dtype"
            className="form-control" 
            name="type" 
            placeholder="Enter the type"
            value={this.state.type}
            onChange={this.handleInputChange} required/>
            <datalist id="Dtype">
                                <option value="Daily Routine"></option>
                                <option value="Special Services"></option>
            </datalist>

            </div>
           
            <div class="form-group col-md-6">
            <label for="driverNIC">Working Hours</label>
            <input type="text" 
            list="WorkingH"
            className="form-control" 
            name="workingHours" 
            placeholder="Working hours"
            value={this.state.workingHours}
            onChange={this.handleInputChange} required/>
            <datalist id="WorkingH">
                                <option value="Weekdays 08:00a.m. - 06:00p.m."></option>
                                <option value="Weekends 08:00a.m. - 06:00p.m."></option>
                                <option value="Weekdays Special Journeys"></option>
                                <option value="Weekends Special Journeys"></option>
                                <option value="Fulltime"></option>
                                <option value="Weekends only"></option>
            </datalist>
            </div>
        </div>
                <br/>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Assinged Trips</label>
                    <textarea
                    className="form-control"
                    name="tripID"
                    placeholder="assigned trip"
                    value={this.state.tripID}
                    onChange={this.handleInputChange}required/>
                </div>
                <br/>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Availability</label>
                    <input type="text"
                    className="form-control"
                    name="availability"
                    placeholder="availability"
                    value={this.state.availability}
                    onChange={this.handleInputChange}required/>
                </div>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-success btn-lg" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Save Driver
                </button>



            </form>
            
        </div>
        </div>
        )
    }
}

