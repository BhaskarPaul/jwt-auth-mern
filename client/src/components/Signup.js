import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { signup } from "../helpers";
import "../App.css";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { AuthContext } from "../Context/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const state = useContext(AuthContext);

    useEffect(() => {
        if (state.loginStatus === "in") {
            history.push("/home");
        } else if (state.loginStatus === "up") {
            history.push("/signin");
        }
    });

    const handleSubmitRequest = () => {
        signup(email, password)
            .then(res => {
                history.push("/signin");
                localStorage.setItem("1-x-p", true);
                state.setLoginStatus("up");
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = () => {
        console.log(email, password);
        handleSubmitRequest();
        setEmail("");
        setPassword("");
    };

    return (
        <Container className="BOX">
            <Header as="h2">Sign Up</Header>
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
                <Button type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;
