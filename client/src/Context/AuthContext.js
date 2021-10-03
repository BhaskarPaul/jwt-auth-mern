import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = props => {
    const [loginStatus, setLoginStatus] = useState(null);

    // useEffect(() => {
    //     const persistLocalStorageState = () => {
    //         window.onstorage = () => {
    //             if (localStorage.getItem("1-x-p") !== false)
    //                 setLoginStatus("up");
    //             if (localStorage.getItem("token") !== null)
    //                 setLoginStatus("in");
    //         };
    //     };
    //     persistLocalStorageState();
    // });

    return (
        <AuthContext.Provider value={{ loginStatus, setLoginStatus }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
