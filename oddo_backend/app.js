import express from "express"
import mongoose from "mongoose"
   



const app = express();
app.use(express.json())
const port = process.env.PORT || 8000

app.listen(port,(req,res) => {
    console.log(`app is listening on port ${port}`)
})

app.get("/", (req,res) => {
    res.send("hellloooo!")
})