
import React, { Component } from 'react';
import axios from 'axios';

  export default class Assigned extends Component{

    constructor(props){
      super(props);

      this.state={
        driverName:"",
        driverNIC:"",
        driverPhone:"",
        licenseNo:"",
        driverAddress:"",
        type:"",
        workingHours:"",
        tripID:"",
        availability:""
        
      }
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  

  onSubmit=(e)=>{
      e.preventDefault();

      const id = this.props.match.params.id;
      const {driverName,driverNIC,driverPhone,licenseNo,driverAddress,type,workingHours,tripID,availability} = this.state;

      const data={
          driverName:driverName,
          driverNIC:driverNIC,
          driverPhone:driverPhone,
          licenseNo:licenseNo,
          driverAddress:driverAddress,
          type:type,
          workingHours:workingHours,
          tripID:tripID,
          availability:availability
          
      }

      console.log(data)

      axios.put(`/post/updateRamona/${id}`, data).then((res)=>{
          if(res.data.success){
              alert("updated Successfully!")
              this.setState(
                  {
                    driverName:"",
                    driverNIC:"",
                    driverPhone:"",
                    licenseNo:"",
                    driverAddress:"",
                    type:"",
                    workingHours:"",
                    tripID:"",
                    availability:""
                    
                    

                  }
              )
          }
      })
  }




    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/postRamona/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            driverName:res.data.post.driverName,
            driverNIC:res.data.post.driverNIC,
            driverPhone:res.data.post.driverPhone,
            licenseNo:res.data.post.licenseNo,
            driverAddress:res.data.post.driverAddress,
            type:res.data.post.type,
            workingHours:res.data.post.workingHours,
            tripID:res.data.post.tripID,
            availability:res.data.post.availability



          });

          console.log(this.state.post);
        }
      });
    }



    render() {

        return (
            <div className="edit">
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'130px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}><img src="/edit.png" class="mx-auto" alt="" width="80" height="80"/>Edit the details of the Driver</h2>
                   <br/>
          </div>
                
                <div style={{marginTop: '45px'}}>
  
                <form className="row g-3">
  
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" style={{color:'white'}}>Name of the Driver</label>
                        <input type="text" className="form-control" name="driverName"  value={this.state.driverName} /*onChange={this.handleChange}*/ required></input>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Contact Number</label>
                        <input type="text" className="form-control" name="driverPhone" value={this.state.driverPhone} /*onChange={this.handleChange} */required/>
                    </div>
  
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Type of the Driver</label>
                        <input type="text" className="form-control" name="type" value={this.state.type} /*onChange={this.handleChange} */required/>
                    </div>
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Working Hours</label>
                        <input type="text" className="form-control" name="workingHours" value={this.state.workingHours} /*onChange={this.handleChange}*/ required/>
                    </div>

                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Assigned Trips</label>
                        <input type="text" className="form-control" name="tripID" value={this.state.tripID} onChange={this.handleChange} />
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Availability</label>
                        <input type="text" className="form-control" name="availability" value={this.state.availability} onChange={this.handleChange} />
                    </div>
                    
                </form>
                    <div>
                        <hr/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit}>Edit Details</button>
                    </div>
  
                    </div>
            </div>
            </div>
        )
    }
  }
