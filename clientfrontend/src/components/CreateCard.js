import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCard extends Component {

    constructor(props){
        super(props);
        this.state={
            fname:"",
            address:"",
            nic:"",
            contactN:"",
            startPoint:"",
            endPoint:"",
            distance:"",
            price:""
        }
    } 
    
    handleInputChange=(e)=>{
        const {name,value}=e.target;

        let nam = e.target.name;
        let val = e.target.value;

        if(nam==="contactN"){
            if(!Number(val)){
                alert("Cannot contain letters");
                
            }
        }
        if(nam==="contactN"){
            if(val.length > 10){
                alert("Invalid length!!");
            }
        }
        if(nam==="contactN"){
            if(val==null){
                alert("Please give your name");
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

    onSubmit=(e)=>{
        e.preventDefault();
        alert("Add Successfully");

        const {fname, address, nic, contactN, startPoint, endPoint, busType, distance, price} = this.state;
        const data ={
            fname:fname,
            address:address,
            nic:nic,
            contactN:contactN,
            startPoint:startPoint,
            endPoint:endPoint,
            distance:distance,
            price:distance*2
        }
        console.log(data)

        axios.post("/postDineth/save", data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        fname:"",
                        address:"",
                        nic:"",
                        contactN:"",
                        startPoint:"",
                        endPoint:"",
                        distance:"",
                        price:""
                    }
                )
            }
        })
    }

    render() {
        return (

            <div style={{backgroundColor:"white"}}>
        
        <div class="sidenav" style={{backgroundColor:'#080523',height:'680px',width:'300px',overflowX:"hidden",paddingtop: '20px'}}>
         <div class="login-main-text">
            <h2 style={{color:"white", marginTop:"180px", marginLeft:"20px"}}>Season Card<br/> Create</h2>
            <p style={{color:"white", marginLeft:"20px"}}>Create a season card and get more benefits..</p>
         </div>
      </div>
      <div class="main" style={{marginLeft:"160px", marginTop:"-585px"}}>     
            <div className = "col-md-4 mt-4 mx-auto" >

                <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>Create Card</h1>
                <form className="needs-validation, container" noValidate style={{backgroundColor:'white', marginLeft:'-250px'}}>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type="text"
                        className="form-control"
                        name="fname"
                        placeholder="Enter full name"
                        value={this.state.fname}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC Number</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter NIC number"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact Number</label>
                        <input type="text"
                        className="form-control"
                        name="contactN"
                        placeholder="Enter contact number"
                        value={this.state.contactN}
                        onChange={this.handleInputChange}/>
                    </div>

               </form>

               <div className = "col-md-7 mt-4 mx-auto">
                    <form className="needs-validation, container" noValidate style={{backgroundColor:'white', marginLeft:'150px', marginTop:'-210px'}}>
                   
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Starting Point</label>
                            <input type="text"
                            list="Spoint"
                            className="form-control"
                            name="startPoint"
                            placeholder="Enter starting point"
                            value={this.state.startPoint}
                            onChange={this.handleInputChange}/>

                            <datalist id="Spoint">
                                <option value="Moratuwa"></option>
                                <option value="Ratmalana"></option>
                                <option value="Mt. Lavinia"></option>
                                <option value="Dehiwala"></option>
                                <option value="Wellawatta"></option>
                                <option value="Bambalapitiya"></option>
                                <option value="Kollupitiya"></option>
                                <option value="Galle Face"></option>
                                <option value="Fort"></option>
                                <option value="Pettah"></option>
                            </datalist>
                        </div>
                    </form>
                </div>

                <div className = "col-md-7 mt-4 mx-auto">
                    <form className="needs-validation, container" noValidate style={{backgroundColor:'white', marginLeft:'440px', marginTop:'-90px'}}>
                        <div className="form-group" style={{marginLeft:'25px', marginTop:'-20px'}}>
                            <label style={{marginBottom:'5px'}}>Ending Point</label>
                            <input type="text"
                            list="bpoint"
                            className="form-control"
                            name="endPoint"
                            placeholder="Enter ending point"
                            value={this.state.endPoint}
                            onChange={this.handleInputChange}/>

                            <datalist id="bpoint">
                                <option value="Moratuwa"></option>
                                <option value="Ratmalana"></option>
                                <option value="Mt. Lavinia"></option>
                                <option value="Dehiwala"></option>
                                <option value="Wellawatta"></option>
                                <option value="Bambalapitiya"></option>
                                <option value="Kollupitiya"></option>
                                <option value="Galle Face"></option>
                                <option value="Fort"></option>
                                <option value="Pettah"></option>
                            </datalist>
                        </div> 
                    </form>
                </div>

                <div className = "col-md-7 mt-4 mx-auto">
                    <form className="needs-validation, container" noValidate style={{backgroundColor:'white', marginLeft:'300px', marginTop:'50px'}}>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <p type="text" style={{marginTop:'0px', marginLeft:"-150px", height:'40px'}}>Get distance from <a href="https://distancecalculator.globefeed.com/Sri_Lanka_Distance_Calculator.asp" target="_blank" rel="noopener noreferrer">here</a> and input to the field</p>
                                <label></label>
                                <input type="text" style={{marginTop:"-40px"}}
                                list="bType"
                                className="form-control"
                                name="distance"
                                placeholder="Distance in kilometers"
                                value={this.state.distance}
                                onChange={this.handleInputChange}/>
                            </div> 
                            
                    </form>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'22px', marginLeft:'550px', height:'40px', width:'180px'}} 
                onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;Submit
                    </button><br/><br/>

            
                </div>

            </div>
            
          <br/><br/><br/><br/>
            
            
            
            </div>
        )
    }
}