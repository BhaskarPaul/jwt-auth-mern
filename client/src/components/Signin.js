import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { signin } from '../helpers';
import '../App.css';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import auth from '../helpers/auth';

const Signin = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const handleSubmitRequest = () => {
        signin(email, password)
            .then(res => {
                localStorage.setItem('token', res);
                auth.in(() => {
                    props.history.push('/home');
                });
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = () => {
        // console.log(email, password);
        handleSubmitRequest();
        setEmail('');
        setPassword('');
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
                <Form.Field>
                    <p>
                        Have not registered yet ?
                        <Link to={{ pathname: '/signup' }}> Sign Up </Link>
                    </p>
                </Form.Field>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </Container>
    );
};

export default Signin;
