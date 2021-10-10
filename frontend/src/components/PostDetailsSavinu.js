import axios from 'axios';
import React,{Component} from'react';

export default class PostDetailsSavinu extends Component {
    constructor(props){
        super(props);

        this.state ={
            postSavinu:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/postSavinu/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    postSavinu:res.data.postSavinu
                });

                console.log(this.state.postSavinu);
            }

        });
    }

    
    render(){

        const {name,employee,address,contact_number,nic,salary,bank_number,user_name} = this.state.postSavinu

        return(
            
            <div style ={{ backgroundColor:"Ivory",}}>
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
                    <th style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-2"><b>Salary</b></th>
                    <td style={{paddingLeft:"80px", paddingBottom:"10px"}} className="col-sm-9">{salary}</td>
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
 