const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app =express();

//import routes
//nisura
//dineth
const postRoutesNisura = require('./routes/postsNisura');
//Ramona Vanhoff
const driverRoutes = require ('./routes/postsRamona'); //postRoutes->driverRoutes

//Disni
const ticketRoutes= require('./routes/postsDisni');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
//nisura
app.use(postRoutesNisura);

app.use(driverRoutes);
//Disni
app.use(ticketRoutes);


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