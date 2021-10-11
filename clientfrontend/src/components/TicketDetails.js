import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './Ticket.css';



export default class TicketDetails extends Component {
   
   constructor(props){
       super(props);

       this.state={
           postDisni:{}

       };


   }
   

   
   
  //retrieve special data
  
    retrievePosts(){
      axios.get("http://localhost:8000/postsDisni").then(res=>{
        if(res.data.success){
          this.setState({
            postsDisni:res.data.existingPosts
          });
        console.log(this.state.postsDisni);
  
        }
      });
    }




   componentDidMount(){
       const id = this.props.match.params.id;

       axios.get(`http://localhost:8000/postDisni/${id}`).then((res)=>{
           if(res.data.success){
               this.setState({
                   postDisni:res.data.postDisni
               });

               console.log(this.state.postDisni);
           }
       });

       this.retrievePosts();
  
   }
   

   
//web page

   
    render() {

       // eslint-disable-next-line no-unused-vars
       const {Cus_name,Cus_NIC,ticket_no,Ticket_date,Ticket_time,Ticket_price,Ticket_from,Ticket_rout,Ticket_miles,Ticket_destination,Ticket_seat_no}=this.state.postDisni;

        return (
        <div>
            <div className="c2" >




            <div className="background2">

                
                <h4 style={{fontSize:'40px',color:'white',textShadow: '1px 2px 5px black'}}><center> <i class="fas fa-receipt"></i>  Your Ticket Details</center></h4>

                <button className="btn btn-success" style={{marginLeft:'800px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/homeDisni" 
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button> 

                <hr />

                             
        <center>
            <table id="table-to-xls-Disni" style={{textShadow: '1px 2px 18px white',fontSize:'22px',color:'black' ,width:'60%', background :"rgba(248, 248, 248, 0.55)"}}>
                
                <tr>
                    <th>Name:</th>
                    <td>{Cus_name}</td>
                </tr>

                <tr>
                    <th>NIC no:</th>
                    <td>{Cus_NIC}</td>
                </tr>

                <tr>
                    <th>Booking Date:</th>
                    <td>{Ticket_date}</td>
                </tr>
                
                <tr>
                    <th>Scheduled time:</th>
                    <td>{Ticket_time}</td>
                </tr>
                
                <tr>
                    <th>Starting point:</th>
                    <td>{Ticket_from}</td>
                </tr>
                
                <tr>
                    <th>Destination:</th>
                    <td>{Ticket_destination}</td>
                </tr>
                
                <tr>
                    <th>Bus rout:</th>
                    <td>{Ticket_rout}</td>
                </tr>
                
                <tr>
                    <th>Miles:</th>
                    <td>{Ticket_miles}Km</td>
                </tr>
                
                <tr>
                    <th>Price per mile:</th>
                    <td>10</td>
                </tr>
                
                <tr>
                    <th>Ticket Price:</th>
                    <td>{Ticket_price}.00 (miles*price per mile)</td>
                </tr>
                
                <tr>
                    <th>Seat no:</th>
                    <td>{Ticket_seat_no}</td>
                </tr>

        </table>
                  <br></br>
                  <button className="btn btn-success"  style={{marginLeft:'30px', marginRight:'0px',padding:'5px 1px' }}><i class="fas fa-download"></i>
        
                
                
                 <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls-Disni"
                    filename="Your_Bus_Ticket"
                    sheet="tablexls"
                    
                    buttonText="Download Your Ticket"
                    className="btn btn-success" style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
                </button>
                <br></br><br></br><br></br>
                <p style={{color:'white',textShadow: '1px 2px 5px black',fontSize:'20px'}}>*Give yes when you open the Excel sheet</p>
        </center>

                
                  


                 </div>           
                 
    
            </div>
       
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

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Travelling Express</a>
</div>

</footer>
        </div>        
            
        )
    }
}
