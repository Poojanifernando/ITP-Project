import React, { Component } from 'react';
import axios from 'axios';

export default class DriverSchedulePasindu extends Component {
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
        axios.get("/postsRamona").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts);

            }
        });
    }

    onDelete = (id) => {

        axios.delete(`/post/deleteRamona/${id}`).then((res) => {
            alert("Deleted successfully!");
            this.retrievePosts();
        })
    }

    filterData(posts, searchKey) {
        const result = posts.filter((post) =>
            post.driverName.toLowerCase().includes(searchKey) ||
            post.driverNIC.toLowerCase().includes(searchKey) ||
            post.type.toLowerCase().includes(searchKey)
        )

        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/postsRamona").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });

    }

    render() {
        return (

            <div className="">
                <div className='container'>
                    <br/><br/>
                    <center> <h3><b>Driver Details</b></h3></center><br/>
                    <table className="table table-dark" style={{marginTop:'10px'}}>
                       
                        <thead >
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">Type</th>
                                <th scope="col">Working Hours</th>
                            </tr>
                        </thead><br/>

                        <tbody>

                            {this.state.posts.map((posts, index) => (

                                <tr key={index}>

                                    <th  scope="row">{index + 1}</th>
                                    <td>{posts.driverName}</td>
                                    <td>{posts.driverPhone}</td>
                                    <td>{posts.type}</td>
                                    <td>{posts.workingHours}</td>

                              </tr>

                            ))}

                        </tbody>

                    </table><br/><br/><hr></hr><br/><br/>

                </div>

                    

            </div>

        )
    }
}