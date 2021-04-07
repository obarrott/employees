import React, { useContext } from 'react';
import EmployeeFinder from '../apis/EmployeeFinder';
import { EmployeesContext } from '../contexts/EmployeesContext';

const FetchEmployees = () => {
  const { addEmployees, clearDatabase } = useContext(EmployeesContext);

const handleReset = () => {
    const response = EmployeeFinder.delete('/1');
    clearDatabase();
    console.log( response);
};

const handleClick = async (e) => {
  e.preventDefault();
    var i = 0;

    while (i<1) {
      await randomUserGenerator()
      await i++;}
};

const randomUserGenerator = async () => {
  await fetch('https://randomuser.me/api/?results=100')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        data.results.map(employee => {    

        const finishCreatingData = async () => {
          try {
            const response = await EmployeeFinder.post('/', {
              first_name: employee.name.first,
              last_name: employee.name.last,
              email: employee.email,
              street_number: employee.location.street.number,
              street_name: employee.location.street.name, 
              city: employee.location.city, 
              state: employee.location.state,
              country: employee.location.country, 
              postal_code: employee.location.postcode,
              date_of_birth: employee.dob.date,
              phone_number: employee.phone,
              cell_number: employee.cell,
              picture_large: employee.picture.large,
              picture_thumbnail: employee.picture.thumbnail
          });

        addEmployees(response.data.data.employee);
          } catch (error) {
              console.log(error);
          }
      }
        finishCreatingData();
        return null;
      });
    })
  }

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row" id="fetchButton">
            <button onClick={handleClick} type="button" id="fetch" className="btn btn-primary">Populate Database</button>
            <div className="col-md-5">
            <button onClick={handleReset} type="button" id="1" className="btn btn-primary">Clear Database</button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default FetchEmployees;