import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <div className="App">
      
        <Switch>
          <Route exact path='/' component={Login}/>
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
    </div>
  );
}

export default App;