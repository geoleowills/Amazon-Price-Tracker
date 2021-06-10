import React, { useContext } from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <div class="welcome-sub-container">
                <h1>
                    Amazon Price
                    <br />
                    Tracker
                </h1>
                <h3>Always get the best price!</h3>
                <div className="button-container">
                    <Link className="button" to="/signin">
                        Sign In
                    </Link>
                    <Link className="button" to="/signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
