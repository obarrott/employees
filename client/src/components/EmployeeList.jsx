import React, {useEffect, useContext} from 'react';
import EmployeeFinder from '../apis/EmployeeFinder';
//import RandomUser from '../apis/RandomUser';
import { EmployeesContext } from '../contexts/EmployeesContext';
import { useHistory } from 'react-router-dom';



const EmployeeList = () => {
    const {employees, setEmployees} = useContext(EmployeesContext);
    let history = useHistory();
    useEffect(() => {
            const fetchData = async () => {

            try {
                const response = await EmployeeFinder.get("/");
                setEmployees(response.data.data.employees);
                console.log(response); //This puts the end of the url on the url from RestaurantFinder.
            } catch (error) {
                console.log(error);
            };
        };
        fetchData();
    },[]);

    const handleEmployeeSelect = (id => {
        history.push(`/employee/${id}`);
    })

    return (
        <div className="list-group">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr className=".bg-primary">
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map((employee) => {
                            return (
                                <tr onClick={() => handleEmployeeSelect(employee.id)} key={employee.id}>
                                    <td>{employee.first_name} {employee.last_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.city}</td>
                                    <td>{employee.country}</td>  
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    );
};



export default EmployeeList;