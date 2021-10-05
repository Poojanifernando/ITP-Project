/*import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {
constructor(props){
    super(props);

    this.state={
        post:{}
    };
}

componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
        if(res.data.success){
            this.setState({
                post:res.data.post
            });

            console.log(this.state.post);
        }
    });
}

    render() {

        const {driverName,driverNIC,driverPhone,licenseNo,driverAddress,driverPassword} = this.state.post;

        return (
            <div style={{marginTop:'20px'}}>
            <h4>{driverName}</h4>
            <hr/>

            <d1 className = 'row'>
            <dt className="col-sm-3">Driver NIC</dt>
            <dd className="col-sm-9">{driverNIC}</dd>

            <dt className="col-sm-3">Driver phone</dt>
            <dd className="col-sm-9">
                {driverPhone}
            </dd>

            <dt className="col-sm-3">License Number</dt>
            <dd className="col-sm-9">{licenseNo}</dd>

            <dt className="col-sm-3">Driver Address</dt>
            <dd className="col-sm-9">{driverAddress}</dd>
            
            <dt className="col-sm-3">Driver Password</dt>
            <dd className="col-sm-9">{driverPassword}</dd>
            </d1>
            </div>
        )
    }
}*/

import React, { Component } from 'react';
import axios from 'axios';
import './app.css';


export default class Details extends Component {
    
    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
 
        axios.get(`/postRamona/${id}`).then((res)=>{  //post ->postRamona
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
 
                console.log(this.state.post);
            }
        });
    }
    
    render() {

        const { driverName,driverNIC,driverPhone,licenseNo,driverAddress,type,workingHours,tripID }=this.state.post;

        return (
            <div className="details" style={{marginTop:'20px'}}>
                <h4>{driverName}</h4>
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Driver NIC</dt>
                    <dd className="col-sm-9">{driverNIC}</dd>

                    <dt className="col-sm-3">Phone Number</dt>
                    <dd className="col-sm-9">{driverPhone}</dd>

                    <dt className="col-sm-3">License Number</dt>
                    <dd className="col-sm-9">{licenseNo}</dd>

                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{driverAddress}</dd>

                    <dt className="col-sm-3">Type of Driver</dt>
                    <dd className="col-sm-9">{type}</dd>

                    <dt className="col-sm-3">Working Hours</dt>
                    <dd className="col-sm-9">{workingHours}</dd>

                    <dt className="col-sm-3">Assigned Trip ID</dt>
                    <dd className="col-sm-9">{tripID}</dd>
                </dl>
                <img src="/profile.png" style={{height:'300px', width:'280px', marginLeft:"700px"}}/>
            </div>
        )
        
       
    }
}

