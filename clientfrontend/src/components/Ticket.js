import React, { Component } from 'react';
import axios from 'axios';

import './Ticket.css';

export default class Ticket extends Component {
  constructor(props){
    super(props);

    this.state={
      postsDisni:[]
    };
  }


  //retrieve data
componentDidMount(){
  this.retrieveTickets();
}


  retrieveTickets(){
    axios.get("http://localhost:8000/postsDisni").then(res=>{
      if(res.data.success){
        this.setState({
          postsDisni:res.data.existingPosts
        });
      console.log(this.state.postsDisni);

      }
    });
  }
  
  
  //delete function

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/post/deleteDisni/${id}`).then((res)=>{

    

    this.retrieveTickets();
  })
  alert("Deleted succesfully");
} 


//search data according to name

filterData(postsDisni,searchKey){
  const result =postsDisni.filter((postDisni)=>
  postDisni.Cus_name.toLowerCase().includes(searchKey) ||
  postDisni.Cus_name.includes(searchKey)


  )

this.setState({postsDisni:result})

}



handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8000/postsDisni").then(res=>{
  if(res.data.success){
  
    this.filterData(res.data.existingPosts,searchKey)
  }
});

}
//web page


  render() {
    return (
  
      <div>
      <div className="background1" >
        
        <div className="row" >
        
          <div className="col-lg-9 mt-2 mb-2">
          <div style={{backgroundColor:"black",marginTop:'650px',marginLeft:'0px',marginRight:'-900px'}}>
           <b> <h4 style={{fontSize:'60px', color:'White',textShadow: '1px 2px 5px black',marginLeft:'500px'}}> TICKET BOOKINGS</h4></b>
          </div>
          
          
           <br></br> <p style={{color:'White',fontSize:'20px'}}>* refresh the page to see your updates and newly created tickets</p>
                <br></br>  
                <button className="btn btn-success" style={{marginLeft:'520px', marginRight:'-1000px',padding:'17px 200px',marginTop:'90px', backgroundColor:'#99aab5'}}><a href="/timetable" style={{textDecoration:'none',color:'white',fontSize:'20px'}}> <i class="fas fa-bus-alt"></i>&nbsp;Time Table</a></button>
                <p style={{color:'White',fontSize:'20px',marginLeft:'520px'}}>* check the timetable before booking your ticket</p>
          <br></br><br></br>

          <button className="btn btn-success" style={{marginLeft:'100px', marginRight:'100px',padding:'17px 90px',marginTop:'90px', backgroundColor:'#3944bc'}}><a href="/addDisni" style={{textDecoration:'none',color:'white',fontSize:'20px'}}> <i class="far fa-plus-square"></i>&nbsp;Create New Ticket</a></button>
          <br></br><br></br>
          

          
            
          </div>
            
          <div className="col-lg-3 my-2 mb-2" style={{marginTop:'100px' }}>
              
            <input
            className="form-control" style={{marginTop:'1115px',padding:'17px 50px'}}
            type="search"
            placeholder="Enter your Name"
            name="searchQuery"
            onChange={this.handleSearchArea}>
              </input>
          
              <br></br>
              <p style={{color:'white',textShadow: '1px 2px 5px black',fontSize:'20px'}}>  *you can search your ticket here</p>
              
          </div>
    
    </div>


              
    <div style={{marginTop:'50px',marginLeft:'50px',marginRight:'50px'}}>
    <p style={{marginLeft:'50px',color:'white',textShadow: '1px 2px 5px black',fontSize:'20px'}} >  *Click on your name to check your ticket details</p>
          

        <table className="table table-hover" style={{marginTop:'50px',marginLeft:'50px',marginRight:'50px'}}>
          <thead>
            <tr style={{fontSize:'20px',color:'white'  }}>
                <th scope="col">Ticket No</th>
                <th scope="col">Customer_name</th>
                
                <th scope="col">FROM</th>
                <th scope="col">TO</th>
                <th scope="col">Action</th>
                </tr>
          </thead>
          <tbody>
            {this.state.postsDisni.map((postsDisni,index)=>(
              <tr key={index}>
                <th scope="row" style={{fontSize:'20px',color:'white'  }}>{index+1}</th>

                <td style={{fontSize:'17px',textShadow: '1px 2px 5px black'}}>
                    <a href={`/postDisni/${postsDisni._id}`} style={{textDecoration:'none',color:'#f2d60d' }}>
                    {postsDisni.Cus_name}
                    </a>
                    
                </td>
                
                <td style={{fontSize:'17px',color:'white',textShadow: '1px 2px 5px black'}}>{postsDisni.Ticket_from}</td>
                <td style={{fontSize:'17px',color:'white',textShadow: '1px 2px 5px black'}}>{postsDisni.Ticket_destination}</td>
                
               
               

                <td>
                    <a className ="btn btn-warning" href={`/editDisni/${postsDisni._id}`}>
                       <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(postsDisni._id)}>
                       <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                    </a>  &nbsp;

                    <a className="btn btn btn-dark btn-lg" href={`/ticketpayment/${postsDisni._id}`} style={{ textDecoration: 'none', color: 'white',backgroundColor:'#28334aff',borderBlockColor:'#394bc',fontSize:'16px' }}>
                        <i class="far fa-credit-card"></i>&nbsp;Payment
                    </a>  &nbsp;
                  
                </td>


              </tr>
            ))}

          </tbody>
          </table>
       </div>

    </div>
    <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"1300px",height:"170px"}}>

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


