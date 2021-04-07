import React, {useState, createContext} from 'react';

export const EmployeesContext = createContext();

export const EmployeesContextProvider = (props) => {
    var [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee]= useState(null);

    //Clears the EmployeeList
    const clearDatabase = () => {
        employees = []
        setEmployees(employees);
    };

    //Displays newly added employees on EmployeeList
    const addEmployees = (employee) => {
        employees.push(employee);
        setEmployees([...employees]);
    };

    return (
         <EmployeesContext.Provider 
             value={{employees, setEmployees, addEmployees, clearDatabase, selectedEmployee, setSelectedEmployee}}>
             {props.children}
         </EmployeesContext.Provider>
    );
}; 