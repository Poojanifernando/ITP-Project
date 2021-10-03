import React, { Component } from 'react';
import axios from 'axios';
import './editcrd.css';

export default class EditCard extends Component {

    constructor(props){
        super(props);
        this.state={
            fname:"",
            address:"",
            nic:"",
            contactN:"",
            startPoint:"",
            endPoint:"",
            distance:"",
            price:""
        }
    } 
    
    handleInputChange=(e)=>{
        const {name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {fname, address, nic, contactN, startPoint, endPoint,distance, price} = this.state;
        const data ={
            fname:fname,
            address:address,
            nic:nic,
            contactN:contactN,
            startPoint:startPoint,
            endPoint:endPoint,
            distance:distance,
            price:distance*2
            
        }

        console.log(data)

        axios.put(`/post/updateDineth/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Card updated successfully")
                this.setState(
                    {
                        fname:"",
                        address:"",
                        nic:"",
                        contactN:"",
                        startPoint:"",
                        endPoint:"",
                        distance:"",
                        price:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/postDineth/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    fname:res.data.postDineth.fname,
                    address:res.data.postDineth.address,
                    nic:res.data.postDineth.nic,
                    contactN:res.data.postDineth.contactN,
                    startPoint:res.data.postDineth.startPoint,
                    endPoint:res.data.postDineth.endPoint,
                    distance:res.data.postDineth.distance,
                    price:res.data.postDineth.price
                });

                console.log(this.state.postDineth);
            }
        });
    }

    render() {
        return (
            <div className="editbody"><br/><br/><br/>
                <h2 style={{color:"white", marginLeft:"20px"}}>Edit <br/> Your Card Details in here..</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="editcard">
                            <div className = "col-md-8 mt-4 mx-auto" style={{color:"white"}}>
                                <form className="needs-validation, box" style={{marginLeft:"320px", marginTop:"-140px"}} noValidate>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>Full Name</label>
                                        <input type="text"
                                        className="form-control"
                                        name="fname"
                                        placeholder="Enter a topic"
                                        value={this.state.fname}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>Address</label>
                                        <input type="text"
                                        className="form-control"
                                        name="address"
                                        placeholder="Enter a description"
                                        value={this.state.address}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>NIC Number</label>
                                        <input type="text"
                                        className="form-control"
                                        name="nic"
                                        placeholder="Enter a category"
                                        value={this.state.nic}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>Contact Number</label>
                                        <input type="text"
                                        className="form-control"
                                        name="contactN"
                                        placeholder="Enter a category"
                                        value={this.state.contactN}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>Starting Point</label>
                                        <input type="text"
                                        className="form-control"
                                        name="startPoint"
                                        placeholder="Enter a category"
                                        value={this.state.startPoint}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>Ending Point</label>
                                        <input type="text"
                                        className="form-control"
                                        name="endtPoint"
                                        placeholder="Enter a category"
                                        value={this.state.endPoint}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group" style={{marginBottom:'15px'}}>
                                        <label style={{marginBottom:'5px'}}>Distance</label>
                                        <p type="text" style={{textAlign:"center", height:'40px'}}><a style={{textDecoration:'none'}} href="https://distancecalculator.globefeed.com/Sri_Lanka_Distance_Calculator.asp" target="_blank" rel="noopener noreferrer">get distance</a></p>
                                        <input type="text" style={{marginTop:"-15px"}}
                                        className="form-control"
                                        name="distance"
                                        placeholder="Enter a category"
                                        value={this.state.distance}
                                        onChange={this.handleInputChange}/>
                                    </div>

                                    <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"180px"}} onClick={this.onSubmit}>
                                        <i className="far fa-check-square"></i>
                                        &nbsp;Update
                                    </button>
                                    <p style={{textAlign:"right", textDecoration:'none'}} type="text"><a style={{textDecoration:'none'}} href="/list">
                                        go back</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
