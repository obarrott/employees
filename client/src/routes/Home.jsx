import React from 'react';
import Header from '../components/Header';
import EmployeeList from '../components/EmployeeList';
import FetchEmployees from '../components/FetchEmployees';

const Home = () => {
    return (
        <div>
            <Header />
            <FetchEmployees />
            <EmployeeList />
        </div>
    )
}

export default Home;