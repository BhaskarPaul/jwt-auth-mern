import React, { useEffect, useContext } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContext } from "./Context/AuthContext";

const App = () => {
    const state = useContext(AuthContext);

    useEffect(() => {
        const persistLocalStorageState = () => {
            window.addEventListener("storage", () => {
                if (localStorage.getItem("1-x-p")) state.setLoginStatus("up");
                if (localStorage.getItem("token")) state.setLoginStatus("in");
            });
        };
        persistLocalStorageState();
    }, []);

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/signup" />
                    </Route>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
