import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeesContext } from '../contexts/EmployeesContext';
import EmployeeFinder from '../apis/EmployeeFinder';

const EmployeeDetailPage = () => {
    const { id } = useParams()
    const { selectedEmployee, setSelectedEmployee } = useContext(EmployeesContext);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await EmployeeFinder.get(`/${id}`);
            console.log(response);
            setSelectedEmployee(response.data.data.employee);

        } catch (error) {
            console.log(error);
        }
        };
        fetchData();
    }, []);

    return (
        <container>
        {selectedEmployee && (
            <div>
        <div>
            <h1 className = "font-weight-light display-5 text-center">
                <div className="profile-img">
                    <img src={selectedEmployee.picture_large} alt=""/>
                </div>
                <div>
                    {selectedEmployee.first_name} {selectedEmployee.last_name}
                </div>
            </h1>
        </div>
        <form>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <label>Email</label>
                </div>
                <div className="col-md-3">
                    <label>{selectedEmployee.email}</label>
                </div>
            </div>
             <div className="row justify-content-center">
                <div className="col-md-2">
                    <label>Address</label>
                </div>
                <div className="col-md-3">
                    <label>{selectedEmployee.street_number} {selectedEmployee.street_name}</label><br></br>
                    <label>{selectedEmployee.city}, {selectedEmployee.state} {selectedEmployee.postal_code}</label><br></br>
                    <label>{selectedEmployee.country}</label>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <label>Phone Number</label>
                </div>
                <div className="col-md-3">
                    <label>{selectedEmployee.phone_number}</label>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <label>Cell Phone</label>
                </div>
                <div className="col-md-3">
                    <label>{selectedEmployee.cell_number}</label>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <label>Birthday</label>
                </div>
                <div className="col-md-3">
                    <label>{selectedEmployee.date_of_birth}</label>
                </div>
            </div>
        </form>
        </div>
        )}
        </container>
        )
}

export default EmployeeDetailPage;