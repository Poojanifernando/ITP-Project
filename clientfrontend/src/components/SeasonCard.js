import React, { Component } from 'react';

export default class SeasonCard extends Component {
    render() {
        return (
            <div>       
                <div style={{height:'280px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center',marginTop:'20px'}}>E-TRAVELING CARD</h2>
                    <div className="container" style={{marginLeft:"28%"}}>
                        <button type="button" class="btn btn-primary" style={{marginTop:'80px'}} title="Request For Season Card"><a href="/addCard" style={{textDecoration:'none', color:'white'}}>Request For Season Card</a></button>&nbsp;&nbsp;
                        <button type="button" class="btn btn-primary" style={{marginTop:'80px'}} title="Season Card Profile"><a href="/list" style={{textDecoration:'none', color:'white'}}>Season Card Profile</a></button>&nbsp;&nbsp;
                        <button type="button" class="btn btn-primary" style={{marginTop:'80px'}} title="Re-charge Season Card"><a href="/charge" style={{textDecoration:'none', color:'white'}}>Re-charge Season Card</a></button>&nbsp;&nbsp;
                    </div>
               </div>

                <img src="/images/scan2.jpg" style={{height:'350px', width:'600px'}}/>


                <div style={{height:'350px', width:'100%', backgroundColor:"black", marginTop:'-350px' }}>
                    <br/><br/>
                    <h3 style={{color:"white", marginLeft:"810px"}}>What is E-TRAVELING card?</h3><br/>
                    <p style={{color:"white", marginLeft:"650px", marginRight:"50px", textAlign:"center"}}>
                        Passengers can pay their charges from season cards for their journeys. People can request a season card when they necessary through 
                        this web application and they can recharge them when its balance is suspended. Passengers need not to carrying any money with them 
                        when they are using the transport services if they are using season cards. If the passenger has a season card they can scan or punch 
                        their card to the scanner in the bus when they are going to use the service.
                    </p>
                </div>

                <img src="/images/des.png" style={{height:'450px', width:'100%', marginTop:'10px'}}/>
                
                

            </div>
        )
    }
}
