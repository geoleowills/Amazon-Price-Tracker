import React, { useContext } from "react";
import { Link } from "react-router-dom";

const UserSignIn = () => {
    return (
        <div className="welcome-container">
            <div class="welcome-sub-container">
                <form>
                    <div>
                        <input
                            id="emailAddress"
                            name="emailAddress"
                            type="text"
                            placeholder="Email Address"
                            // onChange={change}
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            // onChange={change}
                        />
                    </div>
                    <div className="button-container">
                        <button className="button" type="submit">
                            Sign In
                        </button>
                        <Link className="button" to="/">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSignIn;
