import express from 'express';
import connectToDatabase from "../config/database";
// const connectToDatabase = require("../config/database");

//environment variables
require("dotenv").config({ path: "backend/config/config.env" });

//Uncaught Exception Handling
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});


//database connection
connectToDatabase();


const app = express();


//Route Imports
import userRoutes from "../routes/userRoutes";

//routes
app.use('/api/user', userRoutes);


const server = app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});