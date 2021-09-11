const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app =express();

//import routes




//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware




const PORT = 8000;
const DB_URL ='mongodb+srv://admin:admin@project.shu8e.mongodb.net/travellingExpress?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB Connection Error',err));






app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});