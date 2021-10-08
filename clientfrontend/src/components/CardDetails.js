import React, { Component } from 'react';
import axios from 'axios';

export default class CardDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            postDineth:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/postDineth/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    postDineth:res.data.postDineth
                });

                console.log(this.state.postDineth);
            }
        });
    }

    render() {

        const {fname,address,nic,contactN,startPoint,endPoint,distance, price} = this.state.postDineth;

        return (
            <div style={{backgroundColor:"white", height:"800px", marginTop:"-50px"}}><br/><br/><br/>
            <div className="card" style={{marginLeft:"435px", marginTop:"30px"}}>
                <img src="/images/bus12.jpg" style={{width:"100%", height:"200px"}}/>
                <div style={{marginTop:'', backgroundColor:"#080523"}}><br/>
                    <h4 style={{textAlign:"center", backgroundColor:"#080523"}}>{fname}</h4><br/>
                    <hr/><br/><br/>
                    <table style={{border:'0'}}>
                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">Address</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{address}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">NIC number</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{nic}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">Contact Number</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{contactN}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">Starting Point</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{startPoint}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Ending Point</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{endPoint}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Distance</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{distance} Km</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Fee</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">Rs.{price}</td>
                        </tr>
                    
                    </table>
                    <br/><br/>
                </div>
            </div>
            <br/><br/>

            <footer className="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"00px",height:"170px"}}>

          <div>

              <div className="row" style={{marginLeft:"525px",height:"100px"}}>

              <div className="col-md-12 py-5">
                  <div className="mb-5 flex-center">

                  <a className="fb-ic" style={{paddingLeft:"10px"}}>
                      <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  
                  <a className="tw-ic"  style={{paddingLeft:"20px"}}>
                      <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  
                  <a className="gplus-ic" style={{paddingLeft:"20px"}}>
                      <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  
                  <a className="li-ic" style={{paddingLeft:"20px"}}>
                      <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
              
                  <a className="ins-ic" style={{paddingLeft:"20px"}}>
                      <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  
                  <a className="pin-ic" style={{paddingLeft:"20px"}}>
                      <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
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
