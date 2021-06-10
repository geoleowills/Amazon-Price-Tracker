import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";

function App() {
    return (
        <Router>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/signin" component={UserSignIn} />
            <Route path="/signup" component={UserSignUp} />
        </Router>
    );
}

export default App;
