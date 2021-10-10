import React, { Component } from 'react';
import axios from 'axios';
import './trips.css';


    

export default class PostDetailsNisura extends Component {
    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/postNisura/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        const {fname,nic,address,contactNo,startingPoint,endingPoint,noOfPassengers,date,distance,price} = this.state.post;

        return (
            
            <div className="tripnisura" style={{marginLeft:"453px", marginTop:"0px"}}>
                <img src="/img/image.jpg" style={{width:"100%", height:"200px"}}/>
                <div style={{marginTop:'20px'}}>
                    <h4 style={{textAlign:"center"}}>{fname}</h4>
                    <hr/>
                    <table style={{border:'0'}}>
                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">NIC</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{nic}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">Address</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{address}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">Contact Number</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{contactNo}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-5">No of Passengers</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{noOfPassengers}</td>
                        </tr>
                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Trip Date</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{date}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Starting Point</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{startingPoint}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Ending Point</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{endingPoint}</td>
                        </tr>
                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Distance</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">{distance}Km</td>
                        </tr>
                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Trip Cost</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">Rs.{price}</td>
                        </tr>

                        <tr>
                        <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-3">Trip ID</th>
                        <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-15">sp{nic}</td>
                        </tr>
                    
                    </table>
                    <button type="button" className="btn btn-danger" style={{marginTop:'15px', height:'40px'}} title="PAY-NOW"><a href="/tripcharge" style={{textDecoration:'none' , color:'white'}}>PAY-NOW</a></button>
                </div>
            </div>
            
        )
    }
}

