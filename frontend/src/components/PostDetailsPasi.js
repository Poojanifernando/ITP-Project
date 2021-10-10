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
        

      
    <div className='container'><div style={{backgroundColor:"#E3E3E3"}}>
    <div>

    <div  style ={{marginTop:'40px'}}><br></br>
       <h3><center>Details Of ({Bus_plate_number}) Bus</center></h3>
       <br></br></div>

    </div></div>
    <br></br> 
    
    <div className="row">
  <div className="col-lg-9 mt-2 mb-2"><br></br>
  <center>
  <div className="col-lg-9 mt-2 mb-2">
   <table className ="table table-dark">
        <tr>
        <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Bus plate number</td> <td>{Bus_plate_number}</td>
        </tr>
        <tr>
          <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Bus owners name</td> <td>{Bus_owners_name}</td>
        </tr>
        <tr>
        <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Bus owners phoneno</td> <td>{Bus_owners_phoneno}</td>
        </tr>
        <tr>
        <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Number of seats</td> <td>{Number_of_seats}</td>
        </tr>
        <tr>
        <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Condition</td> <td>{Condition}</td>
        </tr>
        <tr>
        <td style={{paddingLeft:"100px", paddingBottom:"10px"}} className="col-sm-15">Date</td> <td>{Date}</td>
        </tr>

  

      </table>

     </div></center></div></div></div>
      )
    }
  }
