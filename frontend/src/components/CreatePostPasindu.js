import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePostPasindu extends Component {

    constructor(props){
        super(props);

        this.state={
          Trip_id:"",
          Driver_name:"",
          Drivers_phone_no:"",
          Plate_number:"",
          Route:"",
          Route2:"",
          Date_Time:""
        }
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


    

    onSubmit=(e)=>{
        e.preventDefault();

        const {Trip_id,Driver_name,Drivers_phone_no,Plate_number,Route,Route2,Date_Time} = this.state;

        const data={
            Trip_id:Trip_id,
            Driver_name:Driver_name,
            Drivers_phone_no:Drivers_phone_no,
            Plate_number:Plate_number,
            Route:Route,
            Route2:Route2,
            Date_Time:Date_Time
        }

        console.log(data)

        axios.post('/postPasindu/save', data).then((res)=>{
            if(res.data.success){
                alert("data Added!")
                this.setState(
                    {
                      Trip_id:"",
                      Driver_name:"",
                      Drivers_phone_no:"",
                      Plate_number:"",
                      Route:"",
                      Route2:"",
                      Date_Time:""
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
    <h2><center>Schedule New Trip </center></h2> <br></br> 
  
      </div></div><center></center>
      <br></br> <br></br>

            <div className='container'> 
            

                 <div class="container">

                <form class="form-horizontal" >
            <div class="form-group row">
             <label class="control-label col-sm-2" for="Trip id">Trip id :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="T-01" name="Trip_id" value={this.state.Trip_id} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>
    
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Drivers name">Drivers name :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="Kamal Perera" name="Driver_name" value={this.state.Driver_name} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Drivers phone number">Drivers phone number :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="0771234567" name="Drivers_phone_no" value={this.state.Drivers_phone_no} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>

                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Plate number">Plate number :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="NB-1234" name="Plate_number" value={this.state.Plate_number} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Route">Starting point :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="Moratuwa"  name="Route" value={this.state.Route} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Route2">End point :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="Pettah"  name="Route2" value={this.state.Route2} onChange={this.handleChange} required/>
                 </div>
                 </div>

                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Date and Time">Date and Time :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="02-02-2021 / 2.00 p.m" name="Date_Time" value={this.state.Date_Time} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>

                 <div>
                 <br></br><hr/> 
                        <button className="btn btn-success" onClick={this.onSubmit}>Add New Schedule &nbsp;<i className ="fas fa-book"></i></button>
                    </div>
                    <br></br><br></br>
         </form>
        </div></div></div>   

                    
            
            
        )
    }
}

