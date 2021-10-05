import React, { Component } from 'react'
import axios from 'axios'

export default class EditPostNisura extends Component {
         
    constructor(props){
        super(props);
        this.state={
                    fname:"",
                    nic:"",
                    address:"",
                    contactNo:"",
                    startingPoint:"",
                    endingPoint:"",
                    noOfPassengers:"",
                    date:"",
                    distance:"",
                    price:""
        }
    }
    handleInputChange=(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {fname,nic,address,contactNo,startingPoint,endingPoint,noOfPassengers,date,distance,price} = this.state;
        const data={
            fname:fname,
            nic:nic,
            address:address,
            contactNo:contactNo,
            startingPoint:startingPoint,
            endingPoint:endingPoint,
            noOfPassengers:noOfPassengers,
            date:date,
            distance:distance,
            price:price,
            price:distance*30
        }

        console.log(data)
    
        axios.put(`/postNisura/update/${id}`,data).then((res) =>{
           if(res.data.success){
               alert("Post Updated Successfully")
               this.setState(
                   {
                    fname:"",
                    nic:"",
                    address:"",
                    contactNo:"",
                    startingPoint:"",
                    endingPoint:"",
                    noOfPassengers:"",
                    date:"",
                    distance:"",
                    price:""


                   }
               )
           } 
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/postNisura/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    fname:res.data.post.fname,
                    nic:res.data.post.nic,
                    address:res.data.post.address,
                    contactNo:res.data.post.contactNo,
                    startingPoint:res.data.post.startingPoint,
                    endingPoint:res.data.post.endingPoint,
                    noOfPassengers:res.data.post.noOfPassengers,
                    date:res.data.post.date,
                    distance:res.data.post.distance,
                    price:res.data.post.price

                });

                console.log(this.state.post);
            }
        });
    }


    render() {
        return (

            <div style={{height:'100%', width:'100%', backgroundColor:"#575757",marginTop:'-25px'}}>
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">UPDATE BOOKING DETAILS</h1>
               <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text"
                        className="form-control"
                        name="fname"
                        placeholder="Enter Name"
                        value={this.state.fname}
                        onChange={this.handleInputChange}/>
                        
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="NIC"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                        </div>
                        
                     
                     

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                        
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact No</label>
                        <input type="text"
                        className="form-control"
                        name="contactNo"
                        placeholder="Enter Contact No"
                        value={this.state.contactNo}
                        onChange={this.handleInputChange}/>
                        
                    </div>
                    

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>No Of Passengers</label>
                        <input type="text"
                        className="form-control"
                        name="noOfPassengers"
                        placeholder="No Of passsengers"
                        value={this.state.noOfPassengers}
                        onChange={this.handleInputChange}/>
                        
                    </div>
                    
                

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Trip Date</label>
                        <input type="text"
                        className="form-control"
                        name="date"
                        placeholder="Trip Date"
                        value={this.state.date}
                        onChange={this.handleInputChange}/>
                        
                    </div>
                    <form>
               <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Starting Point</label>
                        <input type="text"
                        list="spoint"
                        className="form-control"
                        name="startingPoint"
                        placeholder="Starting Point"
                        value={this.state.startingPoint}
                        onChange={this.handleInputChange}/>

                         <datalist id="spoint">
                        <option value="Colombo"></option>
                        <option value="Gampaha"></option>
                        <option value="Kaluthara"></option>
                        <option value="Kandy"></option>
                        <option value="Galle"></option>
                        <option value="Matale"></option>
                        <option value="Nuwara-Eliya"></option>
                        <option value="Jaffna"></option>
                        <option value="Hambanthota"></option>
                        <option value="Trincomalee"></option>
                        <option value="Polonnaruwa"></option>
                        <option value="Kurunagale"></option>
                        </datalist>
                    
                        
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Ending Point</label>
                        <input type="text"
                        list="epoint"
                        className="form-control"
                        name="endingPoint"
                        placeholder="Ending Point"
                        value={this.state.endingPoint}
                        onChange={this.handleInputChange}/>
                         <datalist id="epoint">
                         <option value="Colombo"></option>
                        <option value="Gampaha"></option>
                        <option value="Kaluthara"></option>
                        <option value="Kandy"></option>
                        <option value="Galle"></option>
                        <option value="Matale"></option>
                        <option value="Nuwara-Eliya"></option>
                        <option value="Jaffna"></option>
                        <option value="Hambanthota"></option>
                        <option value="Trincomalee"></option>
                        <option value="Polonnaruwa"></option>
                        <option value="Kurunagale"></option>
                        </datalist>
                    
                        
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Distance</label>
                        <input type="text"
                        className="form-control"
                        name="distance"
                        placeholder="Enter Distance"
                        value={this.state.distance}
                        onChange={this.handleInputChange}/>
                        </div>

                    <button type="button" className="btn btn-secondary" style={{marginTop:'15px', height:'40px'}} title="Check Distance"><a href="https://distancecalculator.globefeed.com/Sri_Lanka_Distance_Calculator.asp" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none' , color:'white'}}>CHECK DISTANCE</a></button>
            
                  
               </form>

                   
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>

                    &nbsp;
                    &nbsp;
                 <button type="button" className="btn btn-secondary" style={{marginTop:'15px', height:'40px'}} title="View Details"><a href="/add"style={{textDecoration:'none' , color:'white'}}>View Details</a></button>


               </form>


            </div>
            </div>
           
        );
    }
}
