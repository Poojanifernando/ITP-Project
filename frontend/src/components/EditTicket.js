/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import React, { Component } from 'react';
import axios from 'axios';

import './Ticket.css';

export default class EditTicket extends Component {

constructor(props){
    super(props);
    this.state={
        Cus_name:"",
        Cus_NIC:"",
        ticket_no:"",
        Ticket_date:"",
        Ticket_time:"",
        Ticket_price:"",
        Ticket_rout:"",
        Ticket_from:"",
        Ticket_miles:"",
        Ticket_destination:"",
        Ticket_seat_no:""
    }

}

//validations
handleInputChange=(e)=>{

    const{name,value}=e.target;
    let nam = e.target.name;
    let val = e.target.value;


    if (nam=== "Ticket_seat_no") {
        
        if (val>45) {
          alert("Seat_no exceeded limits");
        }
      }

    if (nam=== "Ticket_seat_no") {
        
        if (!Number(val)) {
          alert("Seat_no must be a number");
        }
      }
  
      if (nam=== "Ticket_miles") {
          
          if (!Number(val)) {
            alert("Miles must be a number");
          }
        }
  
        if (nam=== "Ticket_rout") {
          
          if (Number(val)) {
            alert("Rout must not be a number");
          }
        }
  
        if (nam=== "Cus_NIC") {
          
          if (val.length > 12  ) {
            alert("Invalide length! input NIC again.");
          }
        }

    this.setState({
        ...this.state,
        [name]:value
    })

}



    
//when customer click the update button, date wil be updated to the dtabase
onSubmit = (e) =>{

    
    e.preventDefault();
    const id = this.props.match.params.id;


    const {Cus_name,Cus_NIC,ticket_no,Ticket_date,Ticket_time,Ticket_price,Ticket_rout,Ticket_from,Ticket_miles,Ticket_destination,Ticket_seat_no}= this.state;
    
    const data ={
        Cus_name:Cus_name,
        Cus_NIC:Cus_NIC,
        ticket_no:ticket_no,
        Ticket_date:Ticket_date,
        Ticket_time:Ticket_time,
        Ticket_miles:Ticket_miles,
        Ticket_price:Ticket_miles*10,
        Ticket_rout:Ticket_rout,
        Ticket_from:Ticket_from,
        Ticket_destination:Ticket_destination,
        Ticket_seat_no:Ticket_seat_no 
    }

    console.log(data)
//update msg will generate

    axios.put(`/post/updateDisni/${id}`,data).then((res)=>{
        if(res.data.success){
            alert("Post Updated successfuly")

            this.setState(
                {
                    Cus_name:"",
                    Cus_NIC:"",
                    ticket_no:"",
                    Ticket_date:"",
                    Ticket_time:"",
                    Ticket_price:"",
                    Ticket_rout:"",
                    Ticket_from:"",
                    Ticket_miles:"",
                    Ticket_destination:"",
                    Ticket_seat_no:""

                }
            )
        }
    })

}


//the data will be render to the current page
    componentDidMount(){
        const id = this.props.match.params.id;
 
        axios.get(`http://localhost:8000/postDisni/${id}`).then((res)=>{

            if(res.data.success){
                this.setState({
                    
                    Cus_name:res.data.postDisni.Cus_name,
                    Cus_NIC:res.data.postDisni.Cus_NIC,
                    ticket_no:res.data.postDisni.ticket_no,
                    Ticket_date:res.data.postDisni.Ticket_date,
                    Ticket_time:res.data.postDisni.Ticket_time,
                    Ticket_price:res.data.postDisni.Ticket_price,
                    Ticket_rout:res.data.postDisni.Ticket_rout,
                    Ticket_miles:res.data.postDisni.Ticket_miles,
                    Ticket_from:res.data.postDisni.Ticket_from,
                    Ticket_destination:res.data.postDisni.Ticket_destination,
                    Ticket_seat_no:res.data.postDisni.Ticket_seat_no

                });
 
                console.log(this.state.postDisni);
            }
        });
    }

    


    render() {
        return (
            

            <div className="col-md-8 mt-4 mx-auto" >
                
                
                <h1 className= "h3 mb-3 font-weight-normal" style={{color:'White',textShadow: '1px 2px 5px black',fontSize:'50px', marginLeft:'300px'}}>
                <i className="fas fa-edit"></i> Edit Your Ticket</h1>

                <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/homeDisni"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

                <br></br>

                <form className="needs-validation" noValidate>
                       
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Customer name:</label>
                            <input type="text"
                            className="form-control"
                            name="Cus_name"
                            placeholder="Enter your name"
                           value={this.state.Cus_name}
                            onChange={this.handleInputChange}/>
                       </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>NIC:</label>
                            <input type="text"
                            className="form-control"
                            name="Cus_NIC"
                            placeholder="Enter your NIC number"
                            value={this.state.Cus_NIC}
                            onChange={this.handleInputChange}/>
                        </div>

                       
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Date:</label>
                            <input type="date"
                            className="form-control"
                            name="Ticket_date"
                            placeholder="Enter the date"
                            value={this.state.Ticket_date}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Time:</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_time"
                            placeholder="Enter your time"
                            value={this.state.Ticket_time}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Starting Point:</label>
                            <input type="text"
                            list="from"
                            className="form-control"
                            name="Ticket_from"
                            placeholder="from"
                            value={this.state.Ticket_from}
                            onChange={this.handleInputChange} required/>
                                <datalist id="from">
                                    <option value="Gampaha"></option>
                                    <option value="Colombo"></option>
                                    <option value="Ganemulla"></option>
                                    <option value="Kurunagala"></option>

                                    </datalist>


                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Destination:</label>
                            <input type="text"
                            list="To"
                            className="form-control"
                            name="Ticket_destination"
                            placeholder="To"
                            value={this.state.Ticket_destination}
                            onChange={this.handleInputChange} required/>
                             <datalist id="To">
                                    <option value="Gampaha"></option>
                                    <option value="Colombo"></option>
                                    <option value="Ganemulla"></option>
                                    <option value="Kurunagala"></option>
                                    </datalist>
                        </div>

                        


                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Rout:</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_rout"
                            list="Rout"
                            placeholder="Enter the rout"
                            value={this.state.Ticket_rout}
                            onChange={this.handleInputChange} required/>
                             <datalist id="Rout">
                                    <option value="Gampaha-Colombo-288"></option>
                                    <option value="Colombo-Gampaha-489"></option>
                                    <option value="Ganemulla-Gampaha-276"></option>
                                    <option value="Kurunagala-Colombo-599"></option>
                                    <option value="Kurunagala-Gampaha-200"></option>
                                    <option value="Kurunagala-Ganemulla-456"></option>
                                    <option value="Ganemulla-Kurunagala-765"></option>
                                    <option value="Gampaha-Ganemulla-257"></option>
                                    <option value="Colombo-Kurunagala-956"></option>


                                    </datalist>
                        </div>



                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Miles(Km):  (calculate your miles from <a href='https://distancecalculator.globefeed.com/Sri_Lanka_Distance_Calculator.asp'>here</a> copy and paste for a one decimal point )</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_miles"
                            placeholder="Enter the miles"
                            value={this.state.Ticket_miles}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Price:</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_price"
                            placeholder={this.state.Ticket_miles*10}
                            value={this.state.Ticket_price}
                           // onChange={this.handleInputChange}
                           />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'25px'}}>Seat no:</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_seat_no"
                            placeholder="Enter the seat_no"
                            value={this.state.Ticket_seat_no}
                            onChange={this.handleInputChange}/>
                        </div>
                    
                        <button className="btn btn-success" type="submit" style={{marginTop:'10px',fontSize:'25px',marginLeft:'420px',marginBottom:'20px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update

                        </button>
                      
                    
                    </form>
                    
                    <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/homeDisni"
                    style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button><br></br>
            </div> 
        )
    }
}
