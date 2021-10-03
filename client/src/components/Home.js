import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userhome, deleteUser } from '../helpers';
import '../App.css';
import { Button, Container, Header } from 'semantic-ui-react';
import auth from '../helpers/auth';

const Home = props => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        userhome()
            .then(res => setUserData(res))
            .catch(err => console.error(err));
    }, []);

    const redirectToSignIn = () => {
        localStorage.removeItem('token');
        auth.out(() => {
            props.history.push('/signin');
        });
    };

    const redirectToSignUp = () => {
        deleteUser()
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    return (
        <Container className="BOX">
            {localStorage.getItem('token') ? (
                <>
                    <Header as="h2">
                        Welcome <span className="span">{userData}</span>
                    </Header>
                    <Button color="teal" onClick={() => redirectToSignIn()}>
                        Log out
                    </Button>
                    <Button color="red" onClick={() => redirectToSignUp()}>
                        Delete Account
                    </Button>
                </>
            ) : (
                <>
                    <Header as="h2">
                        OOPS !!!! You have to Sign In first 👉
                    </Header>
                    <Link to="/signin">
                        <Button color="teal">Sign In</Button>
                    </Link>
                </>
            )}
        </Container>
    );
};

export default Home;
