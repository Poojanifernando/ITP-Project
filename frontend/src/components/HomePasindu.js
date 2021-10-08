import React,{Component} from'react';
import axios from 'axios';
import '../AppPasindu.css'



export default class HomePasindu extends Component{
  
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
    post.Trip_id.toLowerCase().includes(searchKey)||
    post.Driver_name.toLowerCase().includes(searchKey)||
    post.Drivers_phone_no.toLowerCase().includes(searchKey)||
    post.Plate_number.toLowerCase().includes(searchKey)||
    post.Route.toLowerCase().includes(searchKey)||
    post.Route2.toLowerCase().includes(searchKey)||
    post.Date.toLowerCase().includes(searchKey)||
    post.Time.toLowerCase().includes(searchKey)
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
     
      <div className=''><div style={{backgroundColor:"#ECECEC"}}>
      <div>
      <img src="../images/buss03.jpg" alt=""/><br/><br/><br/>
    <h2><center><b>Schedule Trip Details</b> </center></h2> <br></br> 
  
      </div></div><center></center>
      <br></br> <br></br>
        
    <div className ="container"> 
    
      <div className="row">
      <div className="col-lg-9 mt-2 mb-2"><br></br>
     
      <div className="col-lg-9 mt-2 mb-2">
      
        <input className="form-control" type="search" placeholder="Search" name="searchQue"
        onChange={this.handleSearchArea}>
         </input></div></div> 
         <br></br>

       <table className ="table">
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
              <th scope ="col">Action</th>

        </tr>
      </thead>

      <tbody>
        {this.state.posts.map((posts,index) =>(
          <tr key={index}>
            <th scope = "row">{index+1}</th>

            <td>
                <a href={`/postPasindu/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.Trip_id}
                </a></td>
            <td>{posts.Driver_name}</td>
            <td>{posts.Drivers_phone_no}</td>
            <td>{posts.Plate_number}</td>
            <td>{posts.Route}</td>
            <td>{posts.Route2}</td>
            <td>{posts.Date}</td>
            <td>{posts.Time}</td>
            <td>
              
              <a className = "btn btn-warning" href={`/editPasindu/${posts._id}`}>
                <i className ="fas fa-edit"></i>&nbsp;Edit
              </a>
              &nbsp;
              <a className = "btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                <i className ="far fa-trash-alt"></i>&nbsp;Delete
              </a>
            </td>

          </tr>


        ))}
      </tbody>

       </table></div>
       <br></br>
        <button className="btn btn-success"><a href="/addPasindu" style={{textDecoration:'none',color:'white'}}>Create New Record &nbsp;</a><i className ="fas fa-plus"></i></button>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        
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


      
      
