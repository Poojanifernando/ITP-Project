import React, { Component } from 'react'
import axios from "axios"
import './createlocation.css'



export default class CreateLocation extends Component {

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

    handleInputChange=(e)=>{

        const {name,value}=e.target;

        let nam = e.target.name;
        let val = e.target.value;



        if(nam==="BusNo"){

            if(!Number(val)){
                alert("Cannot contain letters");
            }
        }

        if(nam==="BusNo"){
            if(val.length > 3){
                alert("Invalid length!!");
            }
        }

    
        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{

        e.preventDefault();
        
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

        axios.post("/locations/save",data).then((res) =>{
            if(res.data.success){
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

    render() {
        return (
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
            <div className="wrapper wrapper--w790">
                <div className="card card-5">
                    <div className="card-heading">
                        <h2 className="title">Add Location</h2>
                    </div>
                    <div className="card-body">
                        <form method="POST">
                            <div className="form-row m-b-55">
                                <div className="name">Bus No :</div>
                                <div className="value">
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group-desc">
                                                <input className="input--style-5" type="text" name="BusNo"
                                                value={this.state.BusNo}
                                                onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Location 1 :</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="StartingLocation"
                                        value={this.state.StartingLocation}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Location 2 :</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="email" name="FirstDestination"
                                        value={this.state.FirstDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Location 3 :</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="SecondDestination"
                                        value={this.state.SecondDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Location 4 :</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="ThirdDestination"
                                        value={this.state.ThirdDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Location 5 :</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="EndDestination"
                                        value={this.state.EndDestination}
                                        onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <button className="btn btn--radius-2 btn--red" id="button" type="submit" onClick={this.onSubmit}>Add Location</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
