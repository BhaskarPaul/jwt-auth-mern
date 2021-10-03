import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { signin } from "../helpers";
import "../App.css";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { AuthContext } from "../Context/AuthContext";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const state = useContext(AuthContext);

    useEffect(() => {
        if (state.loginStatus === "in") {
            history.push("/home");
            return;
        } else if (state.loginStatus === null) {
            history.push("/signup");
            return;
        }
    });

    const handleSubmitRequest = () => {
        signin(email, password)
            .then(res => {
                localStorage.setItem("token", res);
                history.push("/home");
                state.setLoginStatus("in");
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = () => {
        // console.log(email, password);
        handleSubmitRequest();
        setEmail("");
        setPassword("");
    };

    return (
        <Container className="BOX">
            <Header as="h2">Sign In</Header>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Field>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </Container>
    );
};

export default Signin;
