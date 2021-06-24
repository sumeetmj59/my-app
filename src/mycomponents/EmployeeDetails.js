import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import "./table.css";
const BaseapiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            res: []
        };
    }
    deleteEmployee(empId) {
        const apiUrl = BaseapiUrl + "/api/Employee?id="+empId;
        const { res } = this.state;
        fetch(apiUrl, { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();
            if (!response.ok) {
             const error = (data && data.message) || response.status;
                return Promise.reject(error);
             }
             this.setState({
                res: res.filter(r => r.id !== empId)
             });
             alert('Delete successful');
        });
    }
    componentDidMount() {
        fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
             .then(response => response.json())
             .then(data => this.setState({ res: data }));
    }
    render() {
        const { res } = this.state;
         return (
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>EmpId</th>
                            <th>First name</th>
                            <th>last Name</th>
                            <th>salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            (res.map(emp => {
                                return (
                                    <tr key={emp.id}>
                                        <td>{ emp.id }</td>
                                        <td>{ emp.firstName }</td>
                                        <td>{ emp.lastName }</td>
                                        <td>{ emp.salary}</td>
                                        <button  onClick={() => this.deleteEmployee(emp.id)}>Delete</button>
                                        <br></br>
                                        <Link to="updateComponent">
                                            <button  onClick={() => this.deleteEmployee(emp.id)}>Edit</button>
                                      </Link>
                                    </tr>
                                );
                            }))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default EmployeeDetails;