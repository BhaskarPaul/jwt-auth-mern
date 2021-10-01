import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signout, userhome } from "../helpers";
import "../App.css";
import { Button, Container, Header } from "semantic-ui-react";

const Home = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setUserData(userhome());
    }, []);

    console.log(userData);

    return (
        <Container className="BOX">
            {sessionStorage.getItem("token") ? (
                <>
                    <Header as="h2">
                        Welcome <span className="span">{userData}</span>
                    </Header>
                    <Button color="teal">Log out</Button>
                    <Button color="red">Delete Account</Button>
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
