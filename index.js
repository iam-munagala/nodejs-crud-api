const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const User = require("./models/student.model.js")
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students.route")

const url = "mongodb://localhost:27017/test" || proces.env.URL;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use("/api/students",studentRoutes)


mongoose.connect(url).then((ans) => {
    console.log("db connected")
    app.listen(PORT, () => {
        console.log("server is running");
    })
}).catch((err) => {
    console.log("db connection failed");
})

