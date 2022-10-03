const express = require('express');
const app = express()
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');
const dotenv = require("dotenv");
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("DB Conncection Successfull"))
    .catch((err)=> {
        console.log(err)
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is runnig!")
});


app.use(express.json())
app.use("/person", personRoutes)