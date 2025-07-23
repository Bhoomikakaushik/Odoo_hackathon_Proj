import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./src/routes/userRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use("/api/v1/user", userRoutes);
app.use('/api/v1/admin', adminRoutes);

app.get("/", (req, res) => {
    res.send("hellloooo!");
});

const start = async () => {
    const connectionDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO connected DB host : ${connectionDb.connection.host}`);
    app.listen(port, () => {
        console.log("app is listening on port 8000");
    });
};
start();