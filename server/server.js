import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//dotenv configuration
dotenv.config();

//custom import
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import bookRoutes from "./routes/book.route.js";

//server
const app = express();

//database connection
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", bookRoutes);

//port number
const port = process.env.PORT;

//server started s
app.listen(port, (req, res) => {
  console.log(`server started at port ${port}`);
});

// http://localhost:8000/api/v1/register
