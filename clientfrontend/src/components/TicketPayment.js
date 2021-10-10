/* eslint-disable no-useless-concat */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';

import './TicketPayment.css';



export default class TicketDetails extends Component {
   
  constructor(props){
      super(props);

      this.state={
          postDisni:{}

      };


  }
  

  
  
 //retrieve name and the fee of a customer
 
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
  
  handleInputChange= (e)=>{
    const {name,value} = e.target;
    let nam = e.target.name;
    let val = e.target.type;

   
  //validations 
   

    if (nam=== "name") {
        
        if (Number(val)) {
          alert("Name cannot be a number!");
        }
      }

      if (nam=== "cardnum") {
        
        if (!Number(val)) {
          alert("Card number must be in numbers!");
        }
      }

      if (nam=== "cardnum") {
        
        if (val.length > 16  ) {
          alert("Invalide length! input Card number again.");
        }
      }




    if (nam=== "CVV") {
        
        if (!Number(val)) {
          alert("CVV must be in numbers!");
        }
      }


      if (nam=== "CVV") {
        
        if (val.length > 3  ) {
          alert("Invalide length! input CVV number again.");
        }
      }

     
    this.setState({
        ...this.state,
        [name]:value
    })
}
  





   
    render() {

      const {Cus_name,Cus_NIC,ticket_no,Ticket_date,Ticket_time,Ticket_price,Ticket_rout,Ticket_from,Ticket_miles,Ticket_destination,Ticket_seat_no}=this.state.postDisni;

        return (

            <div>
             <div class="container mt-5 p-3 rounded ">

             <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/homeDisni" 
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>


    <div class="row no-gutters d-flex justify-content-center">
        <div class="col-md-5">
            
            <div class="payment-info">
            <p>Customer Name : {Cus_name}</p>
                <div class="d-flex justify-content-between align-items-center"><span>Card details</span><img class="rounded" src="https://i.imgur.com/Ke8mQmo.jpg" width="30"/></div><span class="type d-block mt-3 mb-1">Card type</span><label class="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>
                
                
                <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                
                
                <div><label class="credit-card-label">Name on card</label><input name="name"  type="text" class="form-control credit-inputs" placeholder="Name"/></div>
                <div><label class="credit-card-label">Card number</label><input name= "cardnum"  type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000"/></div>
                <div class="row">
                    <div class="col-md-6"><label class="credit-card-label">Date</label><input name ="date"  type="text" class="form-control credit-inputs" placeholder="12/24"/></div>
                    <div class="col-md-6"><label class="credit-card-label">CVV</label><input name="CVV"  type="text" class="form-control credit-inputs" placeholder="342"/></div>
                </div>
                <hr class="line"/>
                <br></br><br></br>
                
                <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>{Ticket_price}.00 </span></div>
                
                <br></br><br></br>
                <button class="pb" type="button"><span>Confirm Payment <i className="fa fa-long-arrow-right ml-1" ></i></span></button>
            <br></br><br></br>
            
            
            </div>
        </div>
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
