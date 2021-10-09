import axios from 'axios';
import React,{Component} from'react';

export default class PostDetailsSavinu extends Component {
    constructor(props){
        super(props);

        this.state ={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/postSavinu/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }

        });
    }

    
    render(){

        const {name,employee,address,contact_number,nic,driver_license,bank_number,user_name} = this.state.post

        return(
            
            <div style ={{marginTop:'20px', backgroundColor:"Ivory", padding:"5px"}}>
                <h2><center> {name} </center></h2>
                
                <hr/>
                
                <table style={{border:'0'}}>
                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Name</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{name}</td>
                    </tr>
                    
                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Title</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{employee}</td>
                    </tr>

                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Address</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{address}</td>
                    </tr>

                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Contact Number</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{contact_number}</td>
                    </tr>

                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>NIC</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{nic}</td>
                    </tr>

                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Driver License</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{driver_license}</td>
                    </tr>

                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Bank Number</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{bank_number}</td>
                    </tr>

                    <tr>
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>User Name</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{user_name}</td>
                    </tr>
                </table>
            </div>
        
        )
    }
}
 