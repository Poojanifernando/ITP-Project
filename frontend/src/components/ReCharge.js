import React, { Component } from 'react';
import axios from 'axios';

export default class ReCharge extends Component {

    constructor(props){
        super(props);
        this.state={
            cardno:"",
            holdername:"",
            creditcard:"",
            expire:"",
            amount:""
        }
    } 
    
    handleInputChange=(e)=>{
        const {name,value}=e.target;

        let nam = e.target.name;
        let val = e.target.value;

        if(nam==="amount"){
            if(!Number(val)){
                alert("Cannot contain letters");
            }
        }

        this.setState({
            ...this.state,
            [name]:value
        })

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const {cardno, holdername, creditcard, expire, amount} = this.state;
        const data ={
            cardno:cardno,
            holdername:holdername,
            creditcard:creditcard,
            expire:expire,
            amount:amount
        }
        console.log(data)

        axios.post("/post/charge", data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        cardno:"",
                        holdername:"",
                        creditcard:"",
                        expire:"",
                        amount:""
                    }
                )
            }
        })
    }

    render() {
        return (

            <div style={{height:'420px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/><br/>
                    <h2 style={{color:'#49A8F1', textAlign:'center'}}>Re-Charge Season Card</h2><br/>
                    <h3 style={{color:'white', textAlign:'center', marginLeft:"350px", marginRight:"350px"}}>
                        First time in Sri Lanka now you can top up your season cards with any cryptocurrencies from anywhere in Sri Lanka
                    </h3>

                    <img src="/images/no.png" style={{height:'130px', width:'280px', marginLeft:"270px", marginTop:'40px'}}/>



                    <div style={{height:'350px', width:'100%', backgroundColor:"black", marginTop:'25px' }}>
                    <br/>
                    <h3 style={{color:"white", marginLeft:"40px"}}>Select Paymnet Card</h3>

                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"100px"}} name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                <label class="form-check-label" for="flexRadioDefault1" style={{marginTop:"100px"}}>
                                    <img src="/images/airline.png" style={{height:'160px', width:'240px', marginTop:'-70px', marginLeft:'-110px'}}/>
                                </label>
                        </>
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"120px"}} name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <img src="/images/HSBC.jpg" style={{height:'160px', width:'240px', marginTop:'-70px', marginLeft:'-130px'}}/>
                                </label>
                        </>
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"110px"}} name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <img src="/images/boc.png" style={{height:'165px', width:'240px', marginTop:'-70px', marginLeft:'-120px'}}/>
                                </label>
                        </>
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"180px"}} name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <img src="/images/gold.png" style={{height:'160px', width:'260px', marginTop:'-70px', marginLeft:'-145px'}}/>
                                </label>
                        </>
                    </div>


                    <form className="needs-validation, container"  noValidate>
                        
                        <div className="form-group, container" style={{marginBottom:'10px', marginTop:'-370px', width:"400px"}}>
                            <input type="text"
                            className="form-control"
                            name="cardno"
                            placeholder="Season Card Number"
                            value={this.state.cardno}
                            onChange={this.handleInputChange}/>
                        </div>
                    </form>
                    
                <div style={{backgroundImage:`url(${"/images/blue.jpg"})`, marginTop:"-68px"}}>
                <div className = "col-md-4 mt-2 mx-auto" >
                    <p></p>
                    <h4 style={{marginTop:'400px', marginLeft:"-350px", color:"white"}}>Enter Your Payment Details</h4>
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
                            placeholder="credit/debit card"
                            value={this.state.creditcard}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Expiry Date</label>
                            <input type="text"
                            className="form-control"
                            name="expire"
                            placeholder="dd/mm/yyyy"
                            value={this.state.expire}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Re-Charge Amount</label>
                            <input type="text"
                            className="form-control"
                            name="amount"
                            placeholder="Rs."
                            value={this.state.amount}
                            onChange={this.handleInputChange}/>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"428px"}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Re-Charge
                        </button>
                    </form><br/>

                </div>
            </div></div>
        )
    }
}

