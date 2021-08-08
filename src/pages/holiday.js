import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class holidays extends Component {
    state = { 
        from :"",
        to :"",
        day : "",
        id : "",
        holidays : [],
     }
    
     
    Day(date1, date2){
        var day = new Date(date2).getDate() - new Date(date1).getDate();
        // console.log(day);
        return (day); 
    }

    destroy = async (id)=> {
       await console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then ((willDelete) => {
            if (willDelete) {
            const res = axios.delete(`http://127.0.0.1:8000/api/delete-holiday/${id}`).then((res) => {
                if (res) {
                    if (res.data.status === 200) {
                        swal("Poof! Holiday has been deleted!", {
                            icon: "success",
                          }).then(response => {window.location.reload()});
                          
                    }

                    
                } else {
                    
                }

            });
           
           
            } else {
              swal("Delete canceled");
            }
          });
    }

    //  Day(date1, date2){
    //     this.state.from= date1.getDate();
    //     this.state.from= date2.getDate();
    //     var day = this.state.to - this.state.from;
    //     return(day);
    //  }

    async componentDidMount(){
       await axios.get(`http://127.0.0.1:8000/api/holidays`).then(res => {

            this.setState({
                holidays : res.data.Holidays
            })

        }); 
       
    }
    

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>Holidays <Link to={'add-holiday'} className="btn btn-primary btn-small float-right">Add Holiday</Link> </h1>
                                
                            </div>
                            <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>

                                        <th>Name</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Days</th>
                                        <th>Action</th>
                                </thead>
                                <tbody>
                                {
                                    this.state.holidays.map(holiday => {
                                        return (
                                            
                                            
                                            <tr key={holiday.id}>
                                            <td> {holiday.name} </td>
                                            <td> {holiday.from} </td>
                                            <td> {holiday.to} </td>
                                            <td> {this.Day(holiday.from, holiday.to)} </td>
                                            <td> <Link to={`/edit-holiday/${holiday.id}`} className="btn btn-sm btn-warning" >Edit</Link> <button onClick={(e)=> this.destroy(holiday.id)} className="btn btn-danger btn-sm">Delete</button> </td>
                                            
                                            </tr>

                                        );
                                    })
                                }
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>

          );
    }
}
 
export default holidays;
