import React, { Component } from 'react'
import axios from "axios"

export default class EditLocation extends Component {
    
    constructor(props){
        super(props);
        this.state={
            BusNo:"",
            StartingLocation:"",
            FirstDestination:"",
            SecondDestination:"",
            ThirdDestination:"",
            EndDestination:""

        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;
        
        const {BusNo,StartingLocation,FirstDestination,SecondDestination,ThirdDestination,EndDestination} = this.state;

        const data ={
            BusNo:BusNo,
            StartingLocation:StartingLocation,
            FirstDestination:FirstDestination,
            SecondDestination:SecondDestination,
            ThirdDestination:ThirdDestination,
            EndDestination:EndDestination
        }

        console.log(data)

        axios.put(`/locations/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Location Updated Successfully")
                this.setState(
                    {
                        BusNo:"",
                        StartingLocation:"",
                        FirstDestination:"",
                        SecondDestination:"",
                        ThirdDestination:"",
                        EndDestination:""

                    }
                )

            }
        })


    }
    
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/locations/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                   BusNo:res.data.location.BusNo, 
                   StartingLocation:res.data.location.StartingLocation,
                   FirstDestination:res.data.location.FirstDestination,
                   SecondDestination:res.data.location.SecondDestination,
                   ThirdDestination:res.data.location.ThirdDestination,
                   EndDestination:res.data.location.EndDestination,
                });

                console.log(this.state.location);
            }
        });
    }


    render() {
        return (
            <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
            <div class="wrapper wrapper--w790">
                <div class="card card-5">
                    <div class="card-heading">
                        <h2 class="title">Edit Location</h2>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="form-row m-b-55">
                                <div class="name">Bus No :</div>
                                <div class="value">
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group-desc">
                                                <input class="input--style-5" type="text" name="BusNo"
                                                value={this.state.BusNo}
                                                onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Location 1 :</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-5" type="text" name="StartingLocation"
                                        value={this.state.StartingLocation}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Location 2 :</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-5" type="email" name="FirstDestination"
                                        value={this.state.FirstDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Location 3 :</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-5" type="text" name="SecondDestination"
                                        value={this.state.SecondDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Location 4 :</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-5" type="text" name="ThirdDestination"
                                        value={this.state.ThirdDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Location 5 :</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-5" type="text" name="EndDestination"
                                        value={this.state.EndDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <button class="btn btn--radius-2 btn--red" type="submit" onClick={this.onSubmit}>Update Location</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
