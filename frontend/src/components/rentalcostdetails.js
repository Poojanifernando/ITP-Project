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

      <div style={{backgroundColor: "#080523"}}>
          <div>
          <table>
            <tr>
              <th>
              <img src="/rent1.jpg" class="mx-auto" alt="" width="760px" height="700px"/>
                </th>
              <th>
                <hr/>
                 <h4 className = "t2"  style={{color: " #EBEBEB",  fontweight : "500px"}}><center>{Busid}</center></h4>

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
                        <br/>
                        <hr/>
                 
             </th>
           
          
</tr>

        </table>
               
           
            
        </div>

           </div>
                
                
   
     
    )
  }
}