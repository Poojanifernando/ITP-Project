import React, { Component } from 'react';
import axios from 'axios';

  export default class PostDetailsPasindu extends Component{
    constructor(props){
      super(props);

      this.state ={
          post:{}
      };
    }
    
    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/postPasindu/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);
        }
      });
    }
    render(){

        const {Trip_id,Driver_name,Drivers_phone_no,Plate_number,Route,Route2,Date,Time} = this.state.post;


      return (
        
        <div className='container'><div style={{backgroundColor:"#E3E3E3"}}>
        <div>
    
        <div  style ={{marginTop:'40px'}}><br></br>
           <h3><center>Details Of Trip ({Trip_id})</center></h3>
           <br></br></div>
    
        </div></div>
        <br></br> 
        
        <div className="row">
      <div className="col-lg-9 mt-2 mb-2"><br></br>
      <center>
      <div className="col-lg-9 mt-2 mb-2">
       <table className ="table table-dark">
            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Trip id</td> <td>{Trip_id}</td>
            </tr>
            <tr>
              <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Drivers name</td> <td>{Driver_name}</td>
            </tr>
            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Drivers phone number</td> <td>{Drivers_phone_no}</td>
            </tr>
            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Plate number</td> <td>{Plate_number}</td>
            </tr>
            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Starting Point</td> <td>{Route}</td>
            </tr>
            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">End point</td> <td>{Route2}</td>
            </tr>

            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Date</td> <td>{Date}</td>
            </tr>
            <tr>
            <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Time</td> <td>{Time}</td>
            </tr>


          </table>

         </div></center></div></div></div>
        
 


        
       
      )
    }
  }
