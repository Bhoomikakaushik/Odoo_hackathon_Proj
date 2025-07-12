import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
    res.send("hellloooo!");
});

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://bhoomikakaushik11:60Aay7lHZLnepNkT@cluster0.ses3elx.mongodb.net/");
    console.log(`MONGO connected DB host : ${connectionDb.connection.host}`);
    app.listen(port, () => {
        console.log("app is listening on port 8000");
    });
};
start();