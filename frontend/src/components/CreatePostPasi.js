import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePostPasi extends Component {

    constructor(props){
        super(props);

        this.state={
          Bus_plate_number:"",
          Bus_owners_name:"",
          Bus_owners_phoneno:"",
          Number_of_seats:"",
          Condition:"",
          Date:""
        }
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


    

    onSubmit=(e)=>{
        e.preventDefault();

        const {Bus_plate_number,Bus_owners_name,Bus_owners_phoneno,Number_of_seats,Condition,Date} = this.state;

        const data={
            Bus_plate_number:Bus_plate_number,
            Bus_owners_name:Bus_owners_name,
            Bus_owners_phoneno:Bus_owners_phoneno,
            Number_of_seats:Number_of_seats,
            Condition:Condition,
            Date:Date
        }

        console.log(data)

        axios.post('/postPasi/save', data).then((res)=>{
            if(res.data.success){
                alert("data Added!")
                this.setState(
                    {
                      Bus_plate_number:"",
                      Bus_owners_name:"",
                      Bus_owners_phoneno:"",
                      Number_of_seats:"",
                      Condition:"",
                      Date:""
                    }
                )
            }
        })
    }


    render() {

        return (
<div className=''><div style={{backgroundColor:"#ECECEC"}}>
      <div>
      <br></br> 
    <h2><center>Add new bus to the system </center></h2> <br></br> 
  
      </div></div><center></center>
      <br></br> <br></br>
      <div className='container'> 
          
          <div class="container">

         <form class="form-horizontal" >
     <div class="form-group row">
      <label class="control-label col-sm-2" for="Bus plate number">Bus plate number :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="NB-1234" name="Bus_plate_number" value={this.state.Bus_plate_number} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>

          <div class="form-group row">
      <label class="control-label col-sm-2" for="Bus owners name">owner of the bus :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="Kamal Perera" name="Bus_owners_name" value={this.state.Bus_owners_name} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>
          <div class="form-group row">
      <label class="control-label col-sm-2" for="Bus owners phoneno">Bus owners phoneno :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="0771234567" name="Bus_owners_phoneno" value={this.state.Bus_owners_phoneno} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>

          <div class="form-group row">
      <label class="control-label col-sm-2" for="Number_of_seats">Number_of_seats :</label>
         <div class="col-sm-10">
         <input type="number" class="form-control"  placeholder="52" name="Number_of_seats" value={this.state.Number_of_seats} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>
          <div class="form-group row">
      <label class="control-label col-sm-2" for="Condition">Condition :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="Brand new"  name="Condition" value={this.state.Condition} onChange={this.handleChange} required/>
          </div>
          </div>

          <br></br>
          <div class="form-group row">
      <label class="control-label col-sm-2" for="Date">Date :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="02-02-2021" name="Date" value={this.state.Date} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>

          <div>
          <br></br><hr/> 
                 <button className="btn btn-success" onClick={this.onSubmit}>Add New Bus &nbsp;<i className ="fas fa-book"></i></button>
             </div>
             <br></br><br></br>
  </form>
 </div></div></div>   
            
        )
    }
}

