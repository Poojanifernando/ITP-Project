import React, { Component } from 'react';
import axios from 'axios';

  export default class PostDetailsPasi extends Component{
    constructor(props){
      super(props);

      this.state ={
          post:{}
      };
    }
    
    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/postPasi/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);
        }
      });
    }
    render(){

        const {Bus_plate_number,Bus_owners_name,Bus_owners_phoneno,Number_of_seats,Condition,Date} = this.state.post;


      return (
        
        <div className='container'>
             

        <form class="form-horizontal" >
<div class="form-group row">
         <div  style ={{marginTop:'20px'}}>
           <h4><center>Details Of ({Bus_plate_number}) Bus</center></h4>
           <hr/><br></br>

          <dl className="row">
           <dt className ="control-label col-sm-2">Bus_plate_number</dt>
           <dd className ="col-sm-10">{Bus_plate_number}</dd>

           <dt className ="control-label col-sm-2">owner of the bus</dt>
           <dd className ="col-sm-10">{Bus_owners_name}</dd>

           <dt className ="control-label col-sm-2">BusOwnersPhoneno</dt>
           <dd className ="col-sm-10">{Bus_owners_phoneno}</dd>

           <dt className ="control-label col-sm-2">NumberOfSeats</dt>
           <dd className ="col-sm-10">{Number_of_seats}</dd>

           <dt className ="control-label col-sm-2">Condition</dt>
           <dd className ="col-sm-10">{Condition}</dd>

           <dt className ="control-label col-sm-2">Date</dt>
           <dd className ="col-sm-10">{Date}</dd>

           </dl>
        
          </div></div>
          <br></br><br></br>
          </form>
 </div>
    
      )
    }
  }
