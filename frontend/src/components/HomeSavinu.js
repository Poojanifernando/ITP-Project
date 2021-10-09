import React,{Component} from'react';
import axios from 'axios';
//import postsSavinu from '../../../backend/models/postsSavinu';




export default class HomeSavinu extends Component{
  
  constructor(props){
    super(props);

    this.state = {

      posts:[]
    };

  }

  //after rendering all the component and sub components
  componentDidMount(){
    this.retrievePosts();
  }
  
  retrievePosts(){
    axios.get("/postsSavinu").then(res =>{
    if(res.data.success){
      this.setState({
        postsSavinu:res.data.existingPosts
      });

      console.log(this.state.posts)

    }

    })
  }

  // deleting a specific post from view table
onDelete = (id) =>{

  axios.delete(`/post/deleteSavinu/${id}`).then((res) =>{
    alert("Employee Profile Deleted was Successful");
    this.retrievePosts();
  })
}

// method existingPosts and searchKey
filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.name.toLowerCase().includes(searchKey) ||               // used lower case method to search data
    post.employee.toLowerCase().includes(searchKey) ||
    post.address.toLowerCase().includes(searchKey) ||
    post.contact_number.toLowerCase().includes(searchKey) ||
    post.nic.toLowerCase().includes(searchKey) ||
    post.driver_license.toLowerCase().includes(searchKey) ||
    post.bank_number.toLowerCase().includes(searchKey) ||
    post.user_name.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})

}

//serach area

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
  
  axios.get("/postsSavinu").then(res =>{
    if(res.data.success){
    
      this.filterData(res.data.existingPosts,searchKey)
      }
    });
  
}


  render(){
    return(

      <><img src="/images/BusManage11.png" style={{ height: '400px', width: '100%' }}></img><div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All Employee Payment Profiles</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search for Employee Title"
              name="searchQuery"

              // when we input a value and change invoke onchange and update new statues
              onChange={this.handleSearchArea}>
            </input>
          </div>

        </div>
        <table className="table table-hover" style={{ marginTop: '20px', height:'100%', width:'100%',backgroundColor:"Silver" , marginBottom:'25px'}}>
          <thead>

            <tr>
              <th scope="col"><center> No. </center> </th>
              <th scope="col"><center> Name </center> </th>
              <th scope="col"><center> Employee Title </center> </th>
              <th scope="col"><center> Address</center> </th>
              <th scope="col"><center> Contact Number </center> </th>
              <th scope="col"><center> NIC </center> </th>
              <th scope="col"><center> Driver License </center> </th>
              <th scope="col"><center> Bank Number </center> </th>
              <th scope="col"><center> User Name </center> </th>
              <th scope="col"><center> Action</center> </th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/postSavinu/${posts._id}`} style={{ textDecoration: 'none', padding:'5px',marginBottom:'15px' }}>
                    {posts.name}
                  </a>
                </td>
                <td><center> {posts.employee}</center></td>
                <td><center> {posts.address} </center></td>
                <td><center> {posts.contact_number} </center></td>
                <td><center> {posts.nic} </center></td>
                <td><center> {posts.driver_license} </center></td>
                <td><center> {posts.bank_number} </center></td>
                <td><center> {posts.user_name} </center></td>

                <td>
                  <a className="btn btn-warning" href={`/editSavinu/${posts._id}`} >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp; &nbsp;Delete
                  </a>&nbsp;&nbsp;
                </td>

              </tr>


            ))}
          </tbody>

        </table>
        <button className="btn btn-success"><a href="/addSavinu" style={{ textDecoration: 'none', color: 'white' , marginBottom:'25px'}}>Create New Payment Profile</a> </button>
        &nbsp;


      </div></>
    )
  }
}