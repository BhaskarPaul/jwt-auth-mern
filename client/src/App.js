import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/signup" />
                    </Route>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <ProtectedRoute exact path="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
