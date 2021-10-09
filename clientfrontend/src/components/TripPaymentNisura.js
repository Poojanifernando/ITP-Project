import React, { Component } from 'react';
import axios from 'axios';
 
export default class TripPaymentNisura extends Component {
 
    constructor(props){
        super(props);
        this.state={
           
            holdername:"",
            creditcard:"",
            expire:"",
            tripid:"",
            amount:""
        }
    } 
    
    handleInputChange=(e)=>{
        const {name,value}=e.target;
 
        this.setState({
            ...this.state,
            [name]:value
        })
    }
 
    onSubmit=(e)=>{
        e.preventDefault();
        alert("Payment Successfully completed")
 
        const {holdername, creditcard, expire,tripid, amount} = this.state;
        const data ={
        
            holdername:holdername,
            creditcard:creditcard,
            expire:expire,
            tripid:tripid,
            amount:amount
        }
        console.log(data)
 
        axios.post("/trip/save", data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        
                        holdername:"",
                        creditcard:"",
                        expire:"",
                        tripid:"",
                        amount:""
                    }
                )
            }
        })
    }
 
    render() {
        return (
 
            <div style={{height:'100%', width:'100%', backgroundColor:"#260248"}}>
                    
                    <h2 style={{color:'#49A8F1', textAlign:'center'}}>Payment For Special Services</h2><br/>

                <div className = "col-md-4 mt-2 mx-auto" >
                    <p></p>
                    <h4 style={{marginTop:'40px',color:'#49A8F1', textAlign:'center'}}>Enter Your Payment Details</h4>
                    <form className="needs-validation, container"  noValidate>
 
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Card Holder's Name</label>
                            <input type="text"
                            className="form-control"
                            name="holdername"
                            placeholder="Enter name"
                            value={this.state.holdername}
                            onChange={this.handleInputChange}/>
                        </div>
 
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Card Number</label>
                            <input type="text"
                            className="form-control"
                            name="creditcard"
                            placeholder="Credit/debit card"
                            value={this.state.creditcard}
                            onChange={this.handleInputChange}/>
                        </div>
 
                        <div className="form-group" action="/action_page.php" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Expiry Date</label>
                            <input type="date"
                            className="form-control"
                            name="expire"
                           
                            value={this.state.expire}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Trip ID</label>
                            <input type="text"
                            className="form-control"
                            name="tripid"
                            placeholder="Enter Trip ID"
                            value={this.state.tripid}
                            onChange={this.handleInputChange}/>
                        </div>
                        <h6 style={{color:"#FF0000"}}>NOTE : Type SP and your NIC Number. (eg:SP2012222222222).</h6>
 
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Amount</label>
                            <input type="text"
                            className="form-control"
                            name="amount"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.handleInputChange}/>
                        </div>
 
                        <button className="btn btn-success" type="submit" style={{marginTop:'5px', width:"300px",height:'40px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;PAY-NOW
                        </button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button type="button" className="btn btn-secondary" style={{marginTop:'5px', height:'40px'}} title="Back to Home"><a href="/"style={{textDecoration:'none' , color:'white'}}>Back to Home</a></button>
                    </form><br/><br/><br/><br/><br/>
 
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
        )
    }
}
