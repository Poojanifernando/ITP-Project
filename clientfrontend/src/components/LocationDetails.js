import React, { Component } from 'react';
import axios from 'axios';

export default class LocationDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            location:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/locations/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    location:res.data.location
                });

                console.log(this.state.location);
            }
        });
    }

    render() {

        const {BusNo,StartingLocation,FirstDestination,SecondDestination,ThirdDestination,EndDestination} = this.state.location;

        return (
            <div style={{marginTop:'20px', backgroundColor:"white", height:"600px"}}>
            <h4>{BusNo}</h4>
            <hr/>

            <dl className="row">
                <dt className="col-sm-3">{BusNo}</dt>
                <dt className="col-sm-9">{StartingLocation}</dt>
                <dt className="col-sm-3">{FirstDestination}</dt>
                <dt className="col-sm-9">{SecondDestination}</dt>
                <dt className="col-sm-3">{ThirdDestination}</dt>
                <dt className="col-sm-9">{EndDestination}</dt>
            </dl>
            </div>
        )
    }
}
