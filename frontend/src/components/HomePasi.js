import React,{Component} from'react';
import axios from 'axios';
import '../AppPasi.css'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

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

   

      <div className=''><div style={{backgroundColor:"#E3E3E3"}}>
      <div>
      <img src="../images/buss07.jpg" alt=""/><br/><br/><br/>
    <h2><center>Company Bus Details </center></h2> <br></br> 
  
      </div></div><center></center>
      <br></br>

    <div className ="container" >
      <div className="row">
      <div className='container'> 
         </div>
      <div className="col-lg-9 mt-2 mb-2">
      <input className="form-control" type="search" placeholder="Search" name="searchQue"
        onChange={this.handleSearchArea}>
         </input></div></div><br></br>
       <table className ="table table-dark" id="table-pasi">
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

       </table>  <br/><hr/> <br/>
       <button className="btn btn-success" style={{marginLeft:'30px', marginRight:'0px',padding:'7px 3px' }}><a href="/addPasi" style={{textDecoration:'none',color:'white'}}>Add New Bus&nbsp;</a><i className ="fas fa-plus"></i></button>
       
       <button className="btn btn-info"  style={{marginLeft:'30px', marginRight:'0px',padding:'4px 0.5px' }}><i class="fas fa-download"></i>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-pasi"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download Bus Details"
                    className="btn btn-info" style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
             </button>
    

       
       </div> <br></br> <br></br> <br></br>
       <div>

    


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

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2021 Copyright:
    <a href="https://mdbootstrap.com/"> Travelling Express</a>
</div>

</footer>

    </div>
    </div>
    
    )
  }
}
