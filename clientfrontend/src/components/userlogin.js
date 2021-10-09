import React, { Component } from 'react'

export default class userLogin extends Component {
    render() {
        return (

          <div>
                  
                  <div style={{ 
                backgroundImage: 'url("/userlogindp1.jpg")' ,height:"800px", paddingTop:"10px"}}>
            <div>
                <div>
           
                       
                     
<center>
                            <table border = "3" width = "600px" height = "600px" style={{backgroundColor: "#EBE6DC",  margin: "60px"}}>
                                <tr><th>
                <div className="login-reg-panel, container" style={{marginLeft:"27%"}}>
                    <h2 className = "t2">User login</h2>
                <form>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Username :</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder = "Enter your Username"/>
                   
                </div>
                <div className="col-md-7 mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password :</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    placeholder = "Enter your password"/>
                </div>
                <div className="col-md-7 mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
               
                  
                </div>
            
                <button type="submit" className="btn btn-primary"><a href="/userhome" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>login</a></button>
       <br/><br/>
            
           <p>Do not have an account? <a href="/Usersignup">REGISTER</a></p>

                </form>
                </div>

</th></tr>
</table>
</center>
          
         
            </div>
            </div>
            </div>
            </div>
          
        )
    }
}