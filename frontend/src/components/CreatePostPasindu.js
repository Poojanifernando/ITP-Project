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
          Date:"",
          Time:""
        }
    }

  // handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  handleChange=(e)=>{

    const {name,value}=e.target;

    let nam = e.target.name;
    let val = e.target.value;



    if(nam==="Drivers_phone_no"){

        if(!Number(val)){
            alert("Cannot contain letters");
        }
    }

    if(nam==="Drivers_phone_no"){
        if(val.length > 10){
            alert("Invalid length!!");
        }
    }

    if (nam=== "Driver_name") {
        
        if (Number(val)) {
          alert("Name must be in letters");
        }
      }

    this.setState({
        ...this.state,
        [name]:value
    })
}

    

    onSubmit=(e)=>{
        e.preventDefault();

        const {Trip_id,Driver_name,Drivers_phone_no,Plate_number,Route,Route2,Date,Time} = this.state;

        const data={
            Trip_id:Trip_id,
            Driver_name:Driver_name,
            Drivers_phone_no:Drivers_phone_no,
            Plate_number:Plate_number,
            Route:Route,
            Route2:Route2,
            Date:Date,
            Time:Time
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
                      Date:"",
                      Time:""
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
                <input type="text" class="form-control"  placeholder="Moratuwa" list="r1" name="Route" value={this.state.Route} onChange={this.handleChange} required/>
                <datalist id="r1">
                        <option value="Colombo"></option>
                        <option value="Moratuwa"></option>
                        <option value="Wellawatta"></option>
                        <option value="Kandy"></option>
                        <option value="Galle"></option>
                        <option value="Matale"></option>
                        <option value="Nuwara-Eliya"></option>
                        <option value="Jaffna"></option>
                        <option value="Hambanthota"></option>
                        <option value="Trincomalee"></option>
                        <option value="Polonnaruwa"></option>
                        <option value="Kurunagale"></option>
                        </datalist>
                 </div>
                 </div>
                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Route2">End point :</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" list="r2" placeholder="Pettah"  name="Route2" value={this.state.Route2} onChange={this.handleChange} required/>
                <datalist id="r2">
                        <option value="Colombo"></option>
                        <option value="Moratuwa"></option>
                        <option value="Wellawatta"></option>
                        <option value="Kandy"></option>
                        <option value="Galle"></option>
                        <option value="Matale"></option>
                        <option value="Nuwara-Eliya"></option>
                        <option value="Jaffna"></option>
                        <option value="Hambanthota"></option>
                        <option value="Trincomalee"></option>
                        <option value="Polonnaruwa"></option>
                        <option value="Kurunagale"></option>
                        </datalist>
                 </div>
                 </div>

                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Date and Time">Date :</label>
                <div class="col-sm-10">
                <input type="date" class="form-control"  placeholder="02-02-2021" name="Date" value={this.state.Date} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>

                 <br></br>
                 <div class="form-group row">
             <label class="control-label col-sm-2" for="Date and Time">Time :</label>
                <div class="col-sm-10">
                <input type="time" class="form-control"  placeholder="2.00 p.m" name="Time" value={this.state.Time} onChange={this.handleChange} required/>
                 </div>
                 </div>
                 <br></br>

                 <div>
                 <br></br><hr/> <br></br>
                        <button className="btn btn-success" onClick={this.onSubmit}>Add New Schedule &nbsp;<i className ="fas fa-book"></i></button>
                    </div>
                    <br></br><br></br>
         </form>
        </div></div>
        
        <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"40px",height:"170px"}}>

<div>

    <div class="row" style={{marginLeft:"700px",height:"100px"}}>

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
    <a href="https://mdbootstrap.com/"> Travelling Express</a>
</div>

</footer>

        </div>   

                    
            
            
        )
    }
}

