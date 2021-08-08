// const { Component } = require("react");

import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class EditHoliday extends Component {
    state = {  
        name:'',
        from:'',
        to:'',
    }
    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount(){
        const holiday_id=this.props.match.params.id;
        console.log(holiday_id);
        const res =await axios.get(`http://127.0.0.1:8000/api/edit-holiday/${holiday_id}`)
        if (res.data.status === 200) {
            this.setState({      
                name: res.data.holiday.name,
                from:res.data.holiday.from,
                to:res.data.holiday.to,
            });
        }
        
    }

    updateHoliday = async (e) =>{
        e.preventDefault();
        const holiday_id=this.props.match.params.id;
        const res= await axios.put(`http://127.0.0.1:8000/api/update-holiday/${holiday_id}`, this.state)
        if (res.data.status === 200) {
            console.log(res.data.message);
            console.log();
            this.setState({
                name:'',
                from:'',
                to:'',
            })
            swal({
                title: "Update!",
                text: "Holiday sucessfully updated!",
                icon: "success",
                button: true,
                
              }).then((value) => {
                if (value) {
                    window.location.href="/";
                }else{
                    window.location.href="/"; 
                }
              });

             
        }
    }
    render() { 
        return ( 
            <div className="container"> 
            <div className="row"> 
                <div className="col-md-6"> 
                    <div className="card">
                        <div className="card-header">
                            <h4>Edit Holiday <Link to={'/'} className="btn btn-primary btn-sm float-right">Back</Link></h4>
                            
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.updateHoliday} className="form-group">
                                <div>
                                <label htmlFor="name" >Holiday Name:</label>
                                <input type="text" name="name" id="" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                </div>
                                <div>
                                <label htmlFor="from" >From</label>
                                <input type="date" name="from" id=""onChange={this.handleInput} value={this.state.from} className="form-control" />
                                </div>
                                <div>
                                <label htmlFor="to" >To:</label>
                                <input type="date" name="to" id="" onChange={this.handleInput} value={this.state.to} className="form-control" />
                                </div>
                                <hr />
                                <div>
                                <button type="submit" className="btn btn-primary">save Holiday</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default EditHoliday;
