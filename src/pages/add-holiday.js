import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class addHoliday extends Component {
    state = { 
        name: '',
        from: '',
        to: '',
     }
     
     handleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
                [e.target.to]: e.target.value,
                [e.target.from]: e.target.value
            });
     }
     saveHoliday = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const res = await axios.post('http://127.0.0.1:8000/api/save-holiday', this.state)
        swal({
            title: "Add student",
            text: "Student added succussfully!",
            icon: "success",
            button: "ok!",  
          }).then(response => {window.location.href = "/"})
        // window.location.href="/";
        
     }


    render() { 
        return ( 

            <div className="container"> 
                <div className="row"> 
                    <div className="col-md-6"> 
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Holiday <Link to={'/'} className="btn btn-primary btn-sm float-right">Back</Link></h4>
                                
                            </div>
                            <div className="card-body">
                               <form onSubmit={this.saveHoliday} className="form-group">
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
 
export default addHoliday;

