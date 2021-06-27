import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/app.css";
import App from "./App";
import Provider from "./Context";

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
