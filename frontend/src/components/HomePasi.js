import React,{Component} from'react';
import axios from 'axios';
import '../AppPasi.css'

export default class HomePasi extends Component{
  
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
    axios.get("/postsPasi").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)

    }

    })
  }

  onDelete =(id) =>{
    axios.delete(`/post/deletePasi/${id}`).then((res) =>{
      alert("Deleted Successfully!");
      this.retrievePosts();

    })
  }

  filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.Bus_plate_number.toLowerCase().includes(searchKey)||
    post.Bus_owners_name.toLowerCase().includes(searchKey)||
    post.Bus_owners_phoneno.toLowerCase().includes(searchKey)||
    post.Number_of_seats.toLowerCase().includes(searchKey)||
    post.Condition.toLowerCase().includes(searchKey)||
    post.Date.toLowerCase().includes(searchKey)
    )

    this.setState({posts:result})

  }

handleSearchArea=(e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("/postsPasi").then(res =>{
    if(res.data.success){
     this.filterData(res.data.existingPosts,searchKey)

    }

    })



}



  render(){
    return(
      <div className=''><div style={{backgroundColor:"#ECECEC"}}>
      <div>
      <br></br> 
    <h2><center>All Bus Details </center></h2> <br></br> 
  
      </div></div><center></center>
      <br></br> <br></br>
        
    <div className ="container" >
      <div className="row">
      <div className='container'> 
         </div>
      <div className="col-lg-9 mt-2 mb-2">
      <input className="form-control" type="search" placeholder="Search" name="searchQue"
        onChange={this.handleSearchArea}>
         </input></div></div><br></br>
       <table className ="table">
      <thead>
        <tr>
              <th scope ="col">No. </th>
              <th scope ="col">Bus plate number </th>
              <th scope ="col">Owner of the Bus </th>
              <th scope ="col">Bus owners phoneno </th>
              <th scope ="col">Number of seats </th>
              <th scope ="col">Condition </th>
              <th scope ="col">Date </th>
              <th scope ="col">Action</th>

        </tr>
      </thead><br></br>

      <tbody>
        {this.state.posts.map((posts,index) =>(
          <tr key={index}>
           <th scope = "row">{index+1}</th>

            <td>
                <a href={`/postPasi/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.Bus_plate_number}
                </a></td>
            <td>{posts.Bus_owners_name}</td>
            <td>{posts.Bus_owners_phoneno}</td>
            <td>{posts.Number_of_seats}</td>
            <td>{posts.Condition}</td>
            <td>{posts.Date}</td>
            <td>
              
              <a className = "btn btn-warning" href={`/editPasi/${posts._id}`}>
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

       </table>  <br></br><hr/> 
       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Bus&nbsp;</a><i className ="fas fa-plus"></i></button>
       
       <br></br> <br></br>
       </div> <br></br> <br></br> <br></br>

    </div>
    )
  }
}