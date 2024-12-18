import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());// to parse the incomimg requests with json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, ()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${port}`);
})