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
   
    post.Route.toLowerCase().includes(searchKey)||
    post.Route2.toLowerCase().includes(searchKey)||
    post.Date_Time.toLowerCase().includes(searchKey)
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
    
    <b> <h4 style={{fontSize:'70px', marginTop:'10px',marginLeft:'100px',marginRight:'100px', color:'White',textShadow: '1px 2px 10px black',backgroundColor:"#666666"}}> TIME TABLE</h4></b>
      </div></div><center></center>


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
              <th scope ="col">Date-Time </th>
              

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
            <td>{posts.Date_Time}</td>
            <td>
              
             
            </td>

          </tr>


        ))}
      </tbody>

       </table></div>
       
    </div>
    </div>
     
    )
  }
}


      
      