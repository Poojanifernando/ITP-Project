/* eslint-disable no-useless-concat */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';

import './Ticket.css';



export default class TicketSlip extends Component {
   
   constructor(props){
       super(props);

       this.state={
           postDisni:{}
       };


   }
   

   
   
  
  
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
   

   


   
    render() {

       const {Cus_name,Cus_NIC,ticket_no,Ticket_date,Ticket_time,Ticket_price,Ticket_rout,Ticket_from,Ticket_miles,Ticket_destination,Ticket_seat_no}=this.state.postDisni;

        return (

            <><div className="c2" >



                <div className="c1">

                
                <h4><center><b>Your Ticket Slip</b></center></h4>
                <hr />

                <dl className="row">
                    <dt className="col-sm-3">Name:</dt>
                    <dd className="col-sm-9">{Cus_name}</dd>

                    <dt className="col-sm-3">NIC no:</dt>
                    <dd className="col-sm-9">{Cus_NIC}</dd>

                    <dt className="col-sm-3">Booking Date:</dt>
                    <dd className="col-sm-9">{Ticket_date}</dd>

                    <dt className="col-sm-3">Scheduled time:</dt>
                    <dd className="col-sm-9">{Ticket_time}</dd>

                    <dt className="col-sm-3">Starting point:</dt>
                    <dd className="col-sm-9">{Ticket_from}</dd>

                    <dt className="col-sm-3">Destination:</dt>
                    <dd className="col-sm-9">{Ticket_destination}</dd>

                    <dt className="col-sm-3">Bus rout:</dt>
                    <dd className="col-sm-9">{Ticket_rout}</dd>

                    <dt className="col-sm-3">Miles:</dt>
                    <dd className="col-sm-9">{Ticket_miles}Km</dd>

                    <dt className="col-sm-3">Price per mile:</dt>
                    <dd className="col-sm-9">10</dd>

                    <dt className="col-sm-3">Ticket Price: </dt>
                    <dd className="col-sm-9">{Ticket_price}.00 (miles*price per mile)</dd>

                    <dt className="col-sm-3">Seat no:</dt>
                    <dd className="col-sm-9">{Ticket_seat_no}</dd>




                </dl>

                <center>
                   
                </center><br></br>


     </div>           


            </div>

            </>
            
            
        )
    }
}
