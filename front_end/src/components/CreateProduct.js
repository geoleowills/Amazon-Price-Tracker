import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { useHistory, Link } from "react-router-dom";

const CreateProduct = () => {
    // Access data from our global state using the useContext hook.
    const { authenticatedUser, token, dataHelper } = useContext(Context);
    // Create stateful course variable containing course object.
    const [product, setProduct] = useState({
        title: "",
        url: "",
        targetPrice: "",
    });
    // Create stateful errors variable.
    const [errors, setErrors] = useState([]);
    // Create history object so we are able to access history.
    const history = useHistory();

    // Update state value when form is updated for input with corresponding name.
    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct({ ...product, ...{ [name]: value } });
    };

    // Handle form submit.
    const submit = (e) => {
        e.preventDefault();

        let price = product.targetPrice;

        const test = /^[0-9.]*$/.test(price);

        if (!test) {
            setErrors(["Price is not valid."]);
            return;
        }

        if (price.includes(".")) {
            price = price.split(".");
            if (price[1].length === 1) {
                price[1] = price[1].concat("0");
                price = price.join("");
            } else if (price[1].length === 2) {
                price = price.join("");
            } else if (price[1].length < 1) {
                price = price[0];
                price = price.concat("00");
            } else {
                setErrors(["Price is not valid."]);
                return;
            }
        } else {
            price = price.concat("00");
        }

        price = parseInt(price);
        // Build newCourse payload.
        const newProduct = {
            title: product.title,
            url: product.url,
            targetPrice: price,
            userId: authenticatedUser.id,
        };

        console.log(newProduct);
        /* Attempt to create course using the 'createCourse' dataHelper class method, if
        successful, pushes to homepage, if errors are returned, sets the errors in state
        and these will be displayed to the user. */
        dataHelper
            .createProduct(newProduct, token)
            .then((errors) => {
                if (!errors.length) {
                    history.push("/myproducts");
                } else {
                    setErrors(errors);
                }
            })
            .catch(() => history.push("/error"));
    };

    return (
        <div className="welcome-container">
            <div className="welcome-sub-container">
                <h1>New Product</h1>
                <div>
                    {/* If the error state contains any errors in the array, display errors. */}
                    {errors.length > 0 ? (
                        <React.Fragment>
                            <div className="errors-container">
                                <ul>
                                    {errors.map((error) => (
                                        <li key={error}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        </React.Fragment>
                    ) : (
                        <span></span>
                    )}
                </div>
                <form onSubmit={submit}>
                    <div>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Product Name"
                            onChange={change}
                        />
                    </div>
                    <div>
                        <input
                            id="url"
                            name="url"
                            type="text"
                            placeholder="URL"
                            onChange={change}
                        />
                    </div>
                    <div>
                        <label className="target-price-label" for="targetPrice">
                            £
                        </label>
                        <input
                            id="targetPrice"
                            name="targetPrice"
                            type="text"
                            placeholder="Target Price eg. 67.00"
                            onChange={change}
                        />
                    </div>
                    <div className="button-container">
                        <button className="button" type="submit">
                            Create
                        </button>
                        <Link className="button" to="/myproducts">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
