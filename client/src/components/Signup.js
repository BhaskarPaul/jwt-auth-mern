import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers';
import '../App.css';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import auth from '../helpers/auth';

const Signup = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log('token is here');
            auth.in(() => {
                props.history.push('/home');
            });
        }
    }, []);

    const handleSubmitRequest = () => {
        signup(email, password)
            .then(res => {
                props.history.push('/signin');
                localStorage.setItem('1-x-p', true);
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = () => {
        console.log(email, password);
        handleSubmitRequest();
        setEmail('');
        setPassword('');
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
                <Form.Field>
                    <p>
                        Already have an account ?
                        <Link to={{ pathname: '/signin' }}> Sign In </Link>
                    </p>
                </Form.Field>
                <Button type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;
