/*import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state={
            driverName:"",
            driverNIC:"",
            driverPhone:"",
            licenseNo:"",
            driverAddress:"",
            driverPassword:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const id =  this.props.match.params.id; //to get a specific post

        const {driverName,driverNIC,driverPhone,licenseNo,driverAddress,driverPassword} = this.state;

        const data ={
            driverName:driverName,
            driverNIC:driverNIC,
            driverPhone:driverPhone,
            licenseNo:licenseNo,
            driverAddress:driverAddress,
            driverPassword:driverPassword
        }

        console.log(data)
       
        axios.put(`/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Details Updated Successfully..!")
                this.setState(
                    {
                        driverName:"",
                        driverNIC:"",
                        driverPhone:"",
                        licenseNo:"",
                        driverAddress:"",
                        driverPassword:"" 
                    }
                )
            }
        })
    }
    
    componentDidMount(){

        const id =  this.props.match.params.id;
 
         axios.get(`http://localhost:8000/post/${id}`).then((res)=>{
             if(res.data.success){
                 this.setState({
                    driverName:res.data.post.driverName,
                    driverNIC:res.data.post.driverNIC,
                    driverPhone:res.data.post.driverPhone,
                    driverAddress:res.data.post.driverAddress,
                    driverPassword:res.data.post.driverPassword
                     
                 });
             
                 console.log(this.state.post);
             
             }
 
         });
 
     }
     
     render() {
        return (
    
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit Details</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Name of the Driver</label>
                    <input type="text"
                    className="form-control"
                    name="driverName"
                    placeholder="enter full name"
                    value={this.state.driverName}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Driver NIC</label>
                    <input type="text"
                    className="form-control"
                    name="driverNIC"
                    placeholder="NIC number"
                    value={this.state.driverNIC}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Contact Number</label>
                    <input type="text"
                    className="form-control"
                    name="driverPhone"
                    placeholder="mobile number"
                    value={this.state.driverPhone}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>driving license number</label>
                    <input type="text"
                    className="form-control"
                    name="licenseNo"
                    placeholder="driving license number"
                    value={this.state.licenseNo}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Postal Address</label>
                    <input type="text"
                    className="form-control"
                    name="driverAddress"
                    placeholder="address"
                    value={this.state.driverAddress}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Create a password</label>
                    <input type="text"
                    className="form-control"
                    name="driverPassword"
                    placeholder="create a password"
                    value={this.state.driverPassword}
                    onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Update
                </button>



            </form>
            
        </div>

        )
    }
}*/
import React, { Component } from 'react';
import axios from 'axios';

  export default class response extends Component{

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
            <div style={{height:'130px', width:'100%', backgroundColor:"#260248", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}><img src="/edit.png" class="mx-auto" alt="" width="80" height="80"/>Confirmation of the Driver</h2>
                   <br/>
          </div>
                
                <div style={{marginTop: '45px'}}>
  
                <form className="row g-3">
  
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" style={{color:'white'}}>Name of the Driver</label>
                        <input type="text" className="form-control" name="driverName"  value={this.state.driverName} /*onChange={this.handleChange}*/ required></input>
                    </div>
                    
                    <div className="form-group">
                        <label for="inputPassword4" className="form-label" style={{color:'white'}}>NIC Number</label>
                        <input type="text" className="form-control" name="driverNIC" value={this.state.driverNIC} /*onChange={this.handleChange}*/ required/>
                    </div>
  
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Assigned Trips</label>
                        <input type="text" className="form-control" name="tripID" value={this.state.tripID} /*onChange={this.handleChange}*/ />
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" style={{color:'white'}}>Availability</label>
                        <input type="text" className="form-control" name="availability" value={this.state.availability} onChange={this.handleChange} />
                    </div>
                    
                </form>
                    <div>
                        <hr/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn btn-success btn-lg" onClick={this.onSubmit}>Submit response</button>
                    </div>
  
                    </div>
            </div>
            </div>
        )
    }
  }
