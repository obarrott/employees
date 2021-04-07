import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import EmployeeDetailPage from './routes/EmployeeDetailPage';
import { EmployeesContextProvider} from './contexts/EmployeesContext';

const App = () => {
    return(
        <EmployeesContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path ="/" component = {Home}/>
                        <Route exact path ="/employee/:id" component = {EmployeeDetailPage}/>
                    </Switch>
                </Router>
            </div>
        </EmployeesContextProvider>
    );
};

export default App;