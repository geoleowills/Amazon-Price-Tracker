import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Header = () => {
    // Access data from our global state using the useContext hook.
    const { authenticatedUser } = useContext(Context);

    return (
        <div className="header">
            <h1>Amazon Price Tracker</h1>
            <div className="sign-out-container">
                {/* If a user is signed in, show their name and 'Sign Out' button, otherwise, show 
                    'Sign In' and 'Sign Out' buttons. */}
                {authenticatedUser ? (
                    <React.Fragment>
                        <p>
                            Welcome {authenticatedUser.firstName} {authenticatedUser.lastName}!
                        </p>
                        <Link className="sign-out" to="/signout">
                            Sign Out
                        </Link>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link className="signup" to="/signup">
                            Sign Up
                        </Link>
                        <Link className="signin" to="/signin">
                            Sign In
                        </Link>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default Header;
