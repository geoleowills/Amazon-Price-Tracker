import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useHistory, Link } from "react-router-dom";

const MyProducts = () => {
    // Access data from our global state using the useContext hook.
    const { dataHelper, token } = useContext(Context);
    // Create stateful courses variable.
    const [myProducts, setMyProducts] = useState(null);
    // Create history object so we are able to access history.
    let history = useHistory();

    // Retrieve all courses and store them in the 'courses' state.
    useEffect(() => {
        dataHelper
            .getProducts(token)
            .then((products) => setMyProducts(products))
            .catch(() => history.push("/error"));
        // Use empty array as second argument so useEffect will only run after inital render.
    }, []);

    // let productList;
    // // Check if courses exist and map individual courses to 'Course' component, save array to courseList variable.
    // if (myProducts) {
    //     productList = myProducts.map((product) => (
    //         <Product
    //             id={product.id}
    //             title={product.title}
    //             key={product.id}
    //             currentPrice={product.currentPrice}
    //             targetPrice={product.targetPrice}
    //         />
    //     ));
    // }

    return (
        <div className="bounds">
            {/* {courseList}
            <div className="grid-33">
                <Link className="course--module course--add--module" to="/courses/create">
                    <h3 className="course--add--title">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 13 13"
                            className="add"
                        >
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                        </svg>
                        New Course
                    </h3>
                </Link>
            </div> */}
        </div>
    );
};

export default MyProducts;
