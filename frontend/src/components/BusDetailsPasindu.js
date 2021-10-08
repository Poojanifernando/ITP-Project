import React, { Component } from 'react';
import axios from 'axios';
import '../AppPasi.css'

export default class BusDetailsPasindu extends Component {

  constructor(props) {
    super(props);

    this.state = {

      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }



  retrievePosts() {
    axios.get("/postsPasi").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts)

      }

    })
  }

  onDelete = (id) => {
    axios.delete(`/post/deletePasi/${id}`).then((res) => {
      alert("Deleted Successfully!");
      this.retrievePosts();

    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.Bus_plate_number.toLowerCase().includes(searchKey) ||
      post.Bus_owners_name.toLowerCase().includes(searchKey) ||
      post.Bus_owners_phoneno.toLowerCase().includes(searchKey) ||
      post.Number_of_seats.toLowerCase().includes(searchKey) ||
      post.Condition.toLowerCase().includes(searchKey) ||
      post.Date.toLowerCase().includes(searchKey)
    )

    this.setState({ posts: result })

  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/postsPasi").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)

      }

    })



  }

  render() {
    return (
        <div className="">
        <div className='container'>
            <br/><br/>
            <center> <h3><b>Bus Details</b></h3></center><br/>
            <table className="table table-dark">
               
                <thead >
              <tr>
                <th scope="col">No. </th>
                <th scope="col">Bus plate number </th>
                <th scope="col">Owner of the Bus </th>
                <th scope="col">Bus owners phoneno </th>
                <th scope="col">Number of seats </th>
                <th scope="col">Condition </th>
                
               
              </tr>
            </thead><br></br>

            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td>
                      {posts.Bus_plate_number}
                    </td>
                  <td>{posts.Bus_owners_name}</td>
                  <td>{posts.Bus_owners_phoneno}</td>
                  <td>{posts.Number_of_seats}</td>
                  <td>{posts.Condition}</td>

                </tr>

              ))}
            </tbody>

          </table>  <br/><br></br><hr /><br></br>
      
        </div> 

            
                
      </div>
    )
  }
}