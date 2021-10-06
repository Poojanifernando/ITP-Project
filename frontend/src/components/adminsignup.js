import React, { Component } from 'react'
import axios from 'axios'

export default class adminsignup extends Component {


    constructor(props){
        super(props);
        this.state={
            Name: "",
            EmployeeID:"",
            BirthDay: "",
            EmployeePost:"",
            Email:"",
            Password :"",
        
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
         const {Name,EmployeeID, BirthDay, EmployeePost, Email, Password} = this.state;
 
         const data ={
            Name : Name,
            EmployeeID : EmployeeID,
            BirthDay : BirthDay,
            EmployeePost : EmployeePost,
            Email : Email,
            Password : Password,
          
         }
        
         axios.post(`http://localhost:8000/adminsignup/save`,data).then((res)=>{
             if(res.data.success){
                 this.setState(
                     {
                        Name: "",
                        EmployeeID:"",
                        BirthDay: "",
                        EmployeePost:"",
                        Email:"",
                        Password :"",
                       
                     }
                 )
             }
         })
   
     }
 



    render() {
        return (
         
            <div style={{backgroundColor: "#191970"}}>
          

            <table>
         
            <tr><th>   <img src="/admin.jpg" class="mx-auto" alt="" width="730px" height="1000px"/></th>
            <th>
        
           
                  <center><p style={{color: " #EBEBEB"}}><i><h3>WELCOME TO EMPLOYEE DEPARTMENT</h3></i></p></center>
            
                <table border = "3" width = "700px" height = "800px" style={{backgroundColor: "#EBE6DC",  margin: "60px"}}>
                <tr><th>
                
                <div className="login-reg-panel, container" style={{marginLeft:"10%"}}>
                    <h2><center>Admin Signup</center></h2>
               
                <form>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdName1" className="form-label">Name</label>
                    <input type="text"  className="form-control"  value={this.state.Name}
                        onChange={this.handleInputChange}    name="Name" placeholder="Ex: Saman Perera" aria-describedby="adnameHelp"/>
                    <div id="AdnameHelp" className="form-text"></div>
                </div>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdID" className="form-label">Employee ID</label>
                    <input type="text"  className="form-control"  value={this.state.EmployeeID}
                        onChange={this.handleInputChange}    name="EmployeeID" placeholder="Ex: EMP123" aria-describedby="AdIDHelp"/>
                    <div id="AdIDHelp" className="form-text">Please enter the correct Employee ID that company has provided</div>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdbday" className="form-label">Birth Day</label>
                    <input type="date"  className="form-control"  value={this.state.BirthDay}
                        onChange={this.handleInputChange} name="BirthDay"  placeholder="Select the date" aria-describedby="AdbdayHelp"/>
                    <div id="AdbdayHelp" className="form-text"></div>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputAdpost" className="form-label">Employee Post</label>
                    <input type="text"  className="form-control"  value={this.state.EmployeePost}
                        onChange={this.handleInputChange}  name="EmployeePost"  placeholder="Ex: BusManager" aria-describedby="AdpostHelp"/>
                    <div id="AdpostHelp" className="form-text"></div>
                </div>

                <div className="col-md-7 mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  className="form-control"  value={this.state.Email}
                        onChange={this.handleInputChange} name="Email"  placeholder="Ex: abc@gmail.com" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Please enter the email that company provided</div>
                </div>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputPassword1" className="form-label">Enter your Password</label>
                    <input type="password" className="form-control" value={this.state.Password}
                        onChange={this.handleInputChange}  name="Password"  placeholder = "Enter password that given by the company"/>
                </div>

             
                <div className="col-md-7 mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
              
                </div>
                </th></tr></table>
          
</th></tr></table>

             </div> 
        
        )
    }
}