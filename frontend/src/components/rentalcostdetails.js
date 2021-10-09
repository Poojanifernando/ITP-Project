import React, { Component } from  'react';

import axios from 'axios';

export default class rentalcostdetails extends Component{
  constructor(props){
    super(props);

    this.state ={
        rentalcost:{}
    };

  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/rentalcost/${id}`).then((res) =>{
      if(res.data.success){
         
        this.setState({
          rentalcost:res.data.rentalcost
          
        });
        console.log(this.state.rentalcost);
      }
    });
  }


  
 render(){
        
    
  const {Busid,OwnerName, NationalID, Amountperkm, Numberofkms, Totalcost} = this.state.rentalcost;
    return (
<div>
  
      <div style={{ 
        backgroundImage: 'url("/admin.jpg")' ,height:"800px", paddingTop:"10px"}}>
    <div>
         
       
                <hr/>
                <br/>
                 <h4 className = "t2"  style={{color: " #EBEBEB",  fontweight : "700px"}}><center>{Busid}</center></h4>
<br/><br/>
<center>
                 <table border = "4" width = "560px" height = "400px" style={{backgroundColor: "#EBE6DC",  margin: "10px"}}>
           <tr>
             
             <th>OwnerName</th>
             <th>{OwnerName}</th>  

             </tr>
             <tr>
             <td>NationalID</td>
            <td>{NationalID}</td>
               </tr> 
                  
                   <tr>
                     <td>Amountperkm</td>
                     <td>    {Amountperkm}</td>
                     </tr>

                      <tr>
                      <td>Numberofkms</td>
                      <td>{Numberofkms}</td>
                        </tr>
                
                        <tr>
                      <td>Totalcost</td>
                      <td>{Totalcost}</td>
                        </tr>
                
                     
                
                        </table>
                        </center>
                        <br/>
         
           
          

               
           
            </div>
            </div>
            
  
<div>
            <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"-40px",height:"170px"}}>

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
            
            <div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> Travelling Express</a>
            </div>
            
            </footer> 
            </div>
            </div>
                
                
   
     
    )
  }
}