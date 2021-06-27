"use strict";

const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");

// Load modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { sequelize } = require("./models");

// Variable to enable global error logging.
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === "true";

// Create the Express app.
const app = express();

// Enable All CORS Requests.
app.use(cors());

app.use(express.json()); // For parsing application/json.
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded.

// Setup morgan which gives us http request logging.
app.use(morgan("dev"));

(async () => {
    try {
        // Test connection to the database.
        await sequelize.authenticate();
        console.log("Connection to the database succesful.");
        // Sync models.
        await sequelize.sync();
        console.log("Syncing models with the database.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
})();

// Setup a friendly greeting for the root route.
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Amazon Price Tracker project!",
    });
});

// Add routes.
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Send 404 if no other route matched.
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found",
    });
});

// Setup a global error handler.
app.use((err, req, res, next) => {
    if (enableGlobalErrorLogging) {
        console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
    }
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        const errors = err.errors.map((err) => err.message);
        res.status(400).json({ errors });
    } else {
        res.status(err.status || 500).json({
            message: err.message,
            error: {},
        });
    }
});

// Set our port.
app.set("port", process.env.PORT || 5000);

// Start listening on our port.
const server = app.listen(app.get("port"), () => {
    console.log(`Express server is listening on port ${server.address().port}`);
});
