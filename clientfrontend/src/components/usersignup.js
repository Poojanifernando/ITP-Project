import React, { Component } from 'react'
import axios from 'axios'

export default class usersignup extends Component {


    constructor(props){
        super(props);
        this.state={
            Name: "",
            Age:"",
            BirthDay: "",
            Address:"",
            ContactNumber:"",
            Email :"",
            Password :"",
            Password2 :"",
        
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
         const {Name,Age, BirthDay, Address, ContactNumber, Email, Password, Password2} = this.state;
 
         const data ={
            Name : Name,
            Age : Age,
            BirthDay : BirthDay,
            Address : Address,
            ContactNumber : ContactNumber,
            Email : Email,
            Password: Password,
            Password2:Password2,
          
         }
        
         axios.post(`http://localhost:8000/usersignup/save`,data).then((res)=>{
             if(res.data.success){
                 this.setState(
                     {
                        Name: "",
                        Age:"",
                        BirthDay: "",
                        Address:"",
                        ContactNumber:"",
                        Email :"",
                        Password :"",
                        Password2 :"",
                       
                       
                     }
                 )
             }
         })
   
     }
 



    render() {
        return (
            <div style={{ 
                backgroundImage: 'url("/userlogindp1.jpg")' ,height:"800px", paddingTop:"10px"}}>

          

          
        
           
                  <center><p style={{color: " #EBEBEB"}}><i><h3>WELCOME TO TRAVELLING EXPRESS </h3></i></p></center>
            <center>
                <table border = "3" width = "700px" height = "800px" style={{backgroundColor: "#EBE6DC",  margin: "60px"}}>
                <tr><th>
                
                <div className="login-reg-panel, container" style={{marginLeft:"10%"}}>
                    <h2><center>User Signup</center></h2>
               
                <form>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdName1" className="form-label">Name</label>
                    <input type="text"  className="form-control"  value={this.state.Name}
                        onChange={this.handleInputChange}    name="Name" placeholder="Ex: Saman Perera" aria-describedby="adnameHelp"/>
                    <div id="AdnameHelp" className="form-text"></div>
                </div>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdID" className="form-label">Age</label>
                    <input type="text"  className="form-control"  value={this.state.Age}
                        onChange={this.handleInputChange}    name="Age" placeholder="Enter your Age" aria-describedby="AdIDHelp"/>
    
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdbday" className="form-label">Birth Day</label>
                    <input type="date"  className="form-control"  value={this.state.BirthDay}
                        onChange={this.handleInputChange} name="BirthDay"  placeholder="Select the date" aria-describedby="AdbdayHelp"/>
                    <div id="AdbdayHelp" className="form-text"></div>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdpost" className="form-label">Address</label>
                    <input type="text"  className="form-control"  value={this.state.Address}
                        onChange={this.handleInputChange}  name="Address"  placeholder="Your address" aria-describedby="AdpostHelp"/>
                    <div id="AdpostHelp" className="form-text"></div>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputEmail1" className="form-label">Contact Number</label>
                    <input type="email"  className="form-control"  value={this.state.ContactNumber}
                        onChange={this.handleInputChange} name="ContactNumber"  placeholder="your contact number" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Please enter the email that company provided</div>
                </div>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={this.state.Email}
                        onChange={this.handleInputChange}  name="Email"  placeholder = "EX: abc@gmail.com"/>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputPassword1" className="form-label">password</label>
                    <input type="password" className="form-control" value={this.state.Password}
                        onChange={this.handleInputChange}  name="Password"  placeholder = "create a new password"/>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputPassword1" className="form-label">Re-Enter your password</label>
                    <input type="password" className="form-control" value={this.state.Password2}
                        onChange={this.handleInputChange}  name="Password2"  placeholder = "re-enter your password"/>
                </div>

             
                <div className="col-md-7 mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
              
                </div>
                </th></tr></table>
          
</center>

             </div> 
        
        )
    }
}