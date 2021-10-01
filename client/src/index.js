import React from "react";
import ReactDOM from "react-dom";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import { rootReducers } from "./container/reducres";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

// redux injection
// const composeEnhancers =
//     (typeof window !== "undefined" &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;
// const store = createStore(
//     rootReducers,
//     composeEnhancers(applyMiddleware(thunk))
// );

ReactDOM.render(
    // <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    // </Provider>,
    document.getElementById("root")
);
