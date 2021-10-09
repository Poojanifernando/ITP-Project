/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from'react';
import axios from 'axios';
import './StylePasindu.css'




export default class HomePasindu1 extends Component{
  
  constructor(props){
    super(props);

    this.state = {

      posts:[]
    };

  }

 

  componentDidMount(){
    this.retrievePosts();
  }

  
  retrievePosts(){
    axios.get("/postsPasindu").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)

    }

    })
  }

  onDelete =(id) =>{
    axios.delete(`/post/deletePasindu/${id}`).then((res) =>{
      alert("Deleted Successfully!");
      this.retrievePosts();

    })
  }

  filterData(posts,searchKey){

    const result = posts.filter((post) =>
   
    
    
    post.Plate_number.toLowerCase().includes(searchKey)||
    post.Plate_number.includes(searchKey)||
    post.Route.toLowerCase().includes(searchKey)||
    post.Route.includes(searchKey)||
    post.Route2.toLowerCase().includes(searchKey)||
    post.Route2.includes(searchKey)||
    post.Date.toLowerCase().includes(searchKey)||
    post.Date.includes(searchKey)||
    post.Time.toLowerCase().includes(searchKey)||
    post.Time.includes(searchKey)
    )

    this.setState({posts:result})

  }

handleSearchArea=(e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("/postsPasindu").then(res =>{
    if(res.data.success){
     this.filterData(res.data.existingPosts,searchKey)

    }

    })



}


  render(){
    return(
      
      <div className='timetable'><div>
      <div>
      <br></br> 
    
      <center><b> <h4 style={{fontSize:'70px', marginTop:'10px',marginLeft:'100px',marginRight:'100px', color:'White',textShadow: '1px 2px 10px black',backgroundColor:"#666666"}}> TIME TABLE</h4></b>
      </center></div></div>


      <button className="btn btn-success" style={{marginLeft:'100px', marginRight:'100px',padding:'17px 90px',marginTop:'90px',backgroundColor:'#3895d3'}}><a href="/homeDisni"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>
      <br></br> <br></br>
      <br></br> <p style={{color:'White',fontSize:'22px',backgroundColor:'#1261A0',marginLeft:'100px',marginRight:'100px'}}>* refresh the page to see the new scheduled buses</p>
    <div className ="container" style={{backgroundColor:"#ECECEC"}}> 
    
      <div className="row">
      <div className="col-lg-9 mt-2 mb-2"><br></br>
     
      <div className="col-lg-9 mt-2 mb-2">
      
        <input className="form-control" type="search" placeholder="Search" name="searchQue"
        onChange={this.handleSearchArea}>
         </input>
              <p style={{color:'black',fontSize:'20px'}}>  *you can search your bus details here (search by giving the starting or ending point or date time)</p>
         </div></div> 
         <br></br>

       <table className ="table" style={{fontSize:'20px'}}>
      <thead>
        <tr>
              

              <th scope ="col">No.</th>
              <th scope ="col">Trip id </th>
              <th scope ="col">Drivers name </th>
              <th scope ="col">Drivers phone number </th>
              <th scope ="col">Bus plate number </th>
              <th scope ="col">Starting Point </th>
              <th scope ="col">End Point </th>
              <th scope ="col">Date</th>
              <th scope ="col">Time </th>
              
              

        </tr>
      </thead>

      <tbody>
        {this.state.posts.map((posts,index) =>(
          <tr key={index}>
            <th scope = "row">{index+1}</th>

            <td>{posts.Trip_id}</td>
            <td>{posts.Driver_name}</td>
            <td>{posts.Drivers_phone_no}</td>
            <td>{posts.Plate_number}</td>
            <td>{posts.Route}</td>
            <td>{posts.Route2}</td>
            <td>{posts.Date}</td>
            <td>{posts.Time}</td>
            <td>
              
             
            </td>

          </tr>


        ))}
      </tbody>

       </table></div>
       
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


      
      
