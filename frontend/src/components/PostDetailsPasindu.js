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

        const {Trip_id,Driver_name,Drivers_phone_no,Plate_number,Route,Route2,Date_Time} = this.state.post;


      return (
        
        <div className='container'>
             

        <form class="form-horizontal" >

        </form><br></br>
         <div style ={{marginTop:'20px'}}>
           <h4><center>Trip Details of Trip id-{Trip_id}</center></h4>
           <hr/><br></br>

          <dl className="row">
           <dt className ="control-label col-sm-2">Trip id</dt>
           <dd className ="col-sm-10">{Trip_id}</dd>

           <dt className ="control-label col-sm-2">Drivers name</dt>
           <dd className ="col-sm-10">{Driver_name}</dd>

           <dt className ="control-label col-sm-2">Drivers phone number</dt>
           <dd className ="col-sm-10">{Drivers_phone_no}</dd>

           <dt className ="control-label col-sm-2">Plate number</dt>
           <dd className ="col-sm-10">{Plate_number}</dd>

           <dt className ="control-label col-sm-2">Starting Point</dt>
           <dd className ="col-sm-10">{Route}</dd>

           <dt className ="control-label col-sm-2">End point</dt>
           <dd className ="col-sm-10">{Route2}</dd>

           <dt className ="control-label col-sm-2">Date and Time</dt>
           <dd className ="col-sm-10">{Date_Time}</dd>

           </dl>

          </div></div>
        
 
       
      )
    }
  }
