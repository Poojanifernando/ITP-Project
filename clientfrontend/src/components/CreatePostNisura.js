import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePostNisura extends Component {
    
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
    handleInputChange=(e)=>{

        const {name,value}=e.target;

        let nam = e.target.name;
        let val = e.target.value;



        if(nam==="contactNo"){

            if(!Number(val)){
                alert("Cannot contain letters");
            }
        }

        if(nam==="contactNo"){
            if(val.length > 10){
                alert("Invalid length!!");
            }
        }

        if(nam==="nic"){
            if(val.length > 12){
                alert("Invalid length!!");
            }
        }
        this.setState({
            ...this.state,
            [name]:value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();

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
            price:distance*60,
        
        }

        console.log(data)
    
        axios.post("/postNisura/save",data).then((res) =>{
           if(res.data.success){
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


    render() {
        return (
     
          // <div className="col-md-11.5 mt-11.5 mx-auto " style={{backgroundImage:`url(${"/img/image5.jpg"})`}}>
          <div style={{height:'100%', width:'100%', backgroundColor:"#575757", marginTop:'-25px'}}>


            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal" style={{color:"#00002e"}} ><center>CREATE A NEW BOOKING</center></h1>
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

                    <div className="form-group" action="/action_page.php" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Trip Date</label>
                        <input type="date"
                        className="form-control"
                        name="date"
                      
                        value={this.state.date}
                        onChange={this.handleInputChange}/>
                        
                    </div>

                  


                  
           
     

                

                   

            
                
                
                 


               </form>
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
                    <h5 style={{color:"#000057"}}>After you enter the starting point and the ending point, you need to check the distance from clicking the below button.</h5>
 
                    <img src="img/eew.PNG" alt="Simply Easy Learning" width="1010" height="150"></img>
                    &nbsp;
                    <h5 style={{color:"#000057"}}>Then you need to Enter the distance.</h5>
                    &nbsp;
                    <img src="img/capture5.PNG" alt="Simply Easy Learning" width="1010" height="220"></img>
                    
                    <button type="button" className="btn btn-primary" style={{ color:"#0000d1" ,marginTop:'15px', height:'40px'}} title="Check Distance"><a href="https://distancecalculator.globefeed.com/Sri_Lanka_Distance_Calculator.asp" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none' , color:'white'}}>CHECK DISTANCE</a></button>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Distance</label>
                        <input type="text"
                        className="form-control"
                        name="distance"
                        placeholder="eg: 123"
                        value={this.state.distance}
                        onChange={this.handleInputChange}/>
                        </div>
                  
                  <h5 style={{color:"#FF0000"}}>Please Note: If the entered distance is false, your booking will be terminated.</h5>
               </form>
             
               <button className="btn btn-success" type="submit" style={{marginTop:'15px', height:'40px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                    &nbsp;
                    &nbsp;

                    <button type="button" className="btn btn-secondary" style={{marginTop:'15px', height:'40px'}} title="View Details"><a href="/add" style={{textDecoration:'none' , color:'white'}}>View Details</a></button>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;

            </div>

            <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"00px",height:"170px"}}>

<div>

    <div class="row" style={{marginLeft:"525px",height:"100px"}}>

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

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2021 Copyright:
    <a href="https://google.com/"> Travelling Express</a>
</div>

</footer>

            </div>
            
            
           
        );
    }
}
