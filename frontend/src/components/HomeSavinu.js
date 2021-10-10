import React,{Component} from'react';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import postsSavinu from '../../../backend/models/postsSavinu';



export default class HomeSavinu extends Component{
  
  constructor(props){
    super(props);

    this.state = {

      postsSavinu:[]
    };

  }

  //after rendering all the component and sub components
  componentDidMount(){
    this.retrievePostsSavinu();
  }
  
  retrievePostsSavinu(){
    axios.get("/postsSavinu").then(res =>{
    if(res.data.success){
      this.setState({
        postsSavinu:res.data.existingEmployees
      });

      console.log(this.state.postsSavinu)

    }

    })
  }

  // deleting a specific post from view table
onDelete = (id) =>{

  axios.delete(`/postSavinu/delete/${id}`).then((res) =>{
    alert("Employee Profile Deleted was Successful");
    this.retrievePostsSavinu();
  })
}

// method existingPosts and searchKey
filterData(postsSavinu,searchKey){

  const result = postsSavinu.filter((postSavinu) =>
    postSavinu.name.toLowerCase().includes(searchKey) ||               // used lower case method to search data
    postSavinu.employee.toLowerCase().includes(searchKey) ||
    
    postSavinu.user_name.toLowerCase().includes(searchKey)
  )

  this.setState({postsSavinu:result})

}

//serach area

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
  
  axios.get("/postsSavinu").then(res =>{
    if(res.data.success){
    
      this.filterData(res.data.existingEmployees,searchKey)
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
        <table className="table table-hover" id="tableSavinu" style={{ marginTop: '20px', height:'100%', width:'100%',backgroundColor:"Silver" , marginBottom:'25px'}}>
          <thead>

            <tr>
              <th scope="col"><center> No. </center> </th>
              <th scope="col"><center> Name </center> </th>
              <th scope="col"><center> Employee Type </center> </th>
              <th scope="col"><center> Address</center> </th>
              <th scope="col"><center> Contact Number </center> </th>
              <th scope="col"><center> NIC </center> </th>
              <th scope="col"><center> Salary </center> </th>
              <th scope="col"><center> Bank Number </center> </th>
              <th scope="col"><center> User Name </center> </th>
              <th scope="col"><center> Action</center> </th>
            </tr>
          </thead>

          <tbody>
            {this.state.postsSavinu.map((postsSavinu, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/postSavinu/${postsSavinu._id}`} style={{ textDecoration: 'none', padding:'5px',marginBottom:'15px' }}>
                    {postsSavinu.name}
                  </a>
                </td>
                <td><center> {postsSavinu.employee}</center></td>
                <td><center> {postsSavinu.address} </center></td>
                <td><center> {postsSavinu.contact_number} </center></td>
                <td><center> {postsSavinu.nic} </center></td>
                <td><center> {postsSavinu.salary} </center></td>
                <td><center> {postsSavinu.bank_number} </center></td>
                <td><center> {postsSavinu.user_name} </center></td>

                <td>
                  <a className="btn btn-warning" href={`/editSavinu/${postsSavinu._id}`} >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(postsSavinu._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp; &nbsp;Delete
                  </a>&nbsp;&nbsp;
                </td>

              </tr>


            ))}
          </tbody>

        </table>
        <button className="btn btn-success"><a href="/addSavinu" style={{ textDecoration: 'none', color: 'white' , marginBottom:'25px'}}>Create New Payment Profile</a> </button>
        &nbsp;&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;        

        <br/>
        <br/>
        <br/>
      <div><ReactHTMLTableToExcel

id="test-table-xls-button"

className="download-table-xls-button"
className="btn btn-success"

table="tableSavinu"

filename="tablexls"

sheet="tablexls"

buttonText="Download as XLS"/>

</div>


      </div></>
      
    )
  }
}