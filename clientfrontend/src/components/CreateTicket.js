/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios'
import './Ticket.css';

export default class CreateTicket extends Component {

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


handleInputChange= (e)=>{
    const {name,value} = e.target;
    let nam = e.target.name;
    let val = e.target.value;

   
  //validations 
    if (nam=== "Ticket_seat_no") {
        
      if (val>45) {
        alert("Seat_no exceeded limits!");
      }
    }

    if (nam=== "Ticket_miles") {
        
        if (val<1) {
          alert("Miles must be atleast more than 1km!");
        }
      }

    if (nam=== "Ticket_seat_no") {
        
        if (!Number(val)) {
          alert("Seat_no must be a number!");
        }
      }

      if (nam=== "Cus_name") {
        
        if (Number(val)) {
          alert("Name must be in letters!");
        }
      }

    if (nam=== "Ticket_miles") {
        
        if (!Number(val)) {
          alert("Miles must be a number!");
        }
      }

      if (nam=== "Ticket_rout") {
        
        if (Number(val)) {
          alert("Rout must not be a number!");
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




//when customer click sbmit button, data will be stored 
onSubmit = (e) =>{

    e.preventDefault();

    const {Cus_name,Cus_NIC,ticket_no,Ticket_date,Ticket_time,Ticket_price,Ticket_from,Ticket_rout,Ticket_miles,Ticket_destination,Ticket_seat_no}= this.state;
    
    const data ={
        Cus_name:Cus_name,
        Cus_NIC:Cus_NIC,
        ticket_no:ticket_no,
        Ticket_date:Ticket_date,
        Ticket_time:Ticket_time,
        Ticket_price:Ticket_miles*10,
        Ticket_rout:Ticket_rout,
        Ticket_from:Ticket_from,
        Ticket_miles:Ticket_miles,
        Ticket_destination:Ticket_destination,
        Ticket_seat_no:Ticket_seat_no
    }
//check the data is saved and success msg will display
    console.log(data)

    axios.post('http://localhost:8000/postDisni/save',data).then((res)=>{
        if(res.data.success){
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
            alert("You are saving the details");
            
            
        }
       
    })

    

}


//web page

    render() {
        return (
            <div>
                
                <div> <image src="/image/bus11.jpg" style={{height:'3000px', width:'1100px'}}> </image> </div>
            
                

                <div className="col-md-8 mt-4 mx-auto">
                
                <h1 className= "h3 mb-3 font-weight-normal" style={{color:'White',textShadow: '1px 2px 5px black',fontSize:'50px', marginLeft:'300px'}} >Book a Ticket</h1>

                        <button className="btn btn-success" style={{marginLeft:'730px', marginRight:'-700px',padding:'17px 90px',backgroundColor:'#3895d3'}}><a href="/homeDisni" 
                         style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                         <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button><br></br>
                
                    <form className="needs-validation" noValidate >

                   

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Miles(km): (calculate your miles from <a href='https://distancecalculator.globefeed.com/Sri_Lanka_Distance_Calculator.asp'>here</a>, copy and paste for a one decimal point )</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_miles"
                            placeholder="Enter the miles"
                            value={this.state.Ticket_miles}
                            onChange={this.handleInputChange} required/>
                        </div>
                        
                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Starting Point:</label>
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
                                    <option value="Panadura"></option>
                                    </datalist>


                        </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Destination:</label>
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
                                    <option value="Panadura"></option>
                                    </datalist>
                        </div>

                     <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Price(Rs.):</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_price"
                            placeholder={this.state.Ticket_miles*10}
                           value={this.state.Ticket_price}
                           // onChange={this.handleInputChange}
                           />
                        </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Customer name:</label>
                            <input type="text"
                            className="form-control"
                            name="Cus_name"
                            placeholder="Enter your name"
                            value={this.state.Cus_name}
                            onChange={this.handleInputChange} required/>
                        </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>NIC:</label>
                            <input type="text"
                            className="form-control"
                            name="Cus_NIC"
                            //pattern="[0-9]{9}[V-v]{1}"
                            placeholder="Enter your NIC number"
                            value={this.state.Cus_NIC}
                            onChange={this.handleInputChange} required/>
                        </div>
                        
                        
                    

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Date:</label>
                            <input type="date"
                            className="form-control"
                            name="Ticket_date"
                            placeholder="Enter the date"
                            value={this.state.Ticket_date}
                            onChange={this.handleInputChange} required/>
                        </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Time:</label>
                            <input type="time"
                            className="form-control"
                            name="Ticket_time"
                            placeholder="Enter the time"
                            value={this.state.Ticket_time}
                            onChange={this.handleInputChange} required/>
                           
                        </div>

                        

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Rout:</label>
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
                                    <option value="Panadura-Colombo-906"></option>
                                    <option value="Colombo-Panadura-986"></option>


                                    </datalist>
                        </div>

                        
                       
                      

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',color:'white',fontSize:'20px'}}>Seat no:(01-45)</label>
                            <input type="text"
                            className="form-control"
                            name="Ticket_seat_no"
                            placeholder="Enter the seat_no"
                            value={this.state.Ticket_seat_no}
                            onChange={this.handleInputChange} required/>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginTop:'10px',fontSize:'25px',marginLeft:'420px',marginBottom:'20px'}} onClick={this.onSubmit} >
                            <i className="far fa-check-square"></i>
                            &nbsp; Save

                        </button>

                    </form>

                    <button className="btn btn-success" style={{marginLeft:'730px', marginRight:'-700px',padding:'17px 90px',backgroundColor:'#3895d3'}}><a href="/homeDisni" 
                         style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                         <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>
                    
            </div>

            <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"40px",height:"170px"}}>

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
        )
    }
}
