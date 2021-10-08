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
                  
            
                        <div className="w3-dropdown-hover">
                        <button type="button" class="btn btn-primary" style={{marginTop:'80px'}} title="Re-charge Season Card">Re-charge the Card</button>
                        <div class="w3-dropdown-content w3-bar-block w3-card-4">
                            <a href="/charge" class="w3-bar-item btn-primary" style={{textDecoration:'none', color:"white"}}>First time?</a>
                            <a href="/chargelist" class="w3-bar-item btn-primary" style={{textDecoration:'none', color:"white"}}>Did before?</a>
                            
                        </div>
                        </div>

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
