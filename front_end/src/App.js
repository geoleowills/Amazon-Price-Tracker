import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import CreateProduct from "./components/CreateProduct";
import PrivateRoute from "./components/PrivateRoute";
import MyProducts from "./components/MyProducts";
import Header from "./components/Header";
import UserSignOut from "./components/UserSignOut";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route path="/signin" component={UserSignIn} />
                <Route path="/signup" component={UserSignUp} />
                <Header />
            </Switch>

            <Switch>
                <PrivateRoute path="/createproduct" component={CreateProduct} />
                <PrivateRoute path="/myproducts" component={MyProducts} />
                <Route path="/signout" component={UserSignOut} />
            </Switch>
        </Router>
    );
}

export default App;
