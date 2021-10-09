const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app =express();


//import routes
//nisura
const postRoutesNisura = require('./routes/postsNisura');

//Ramona Vanhoff
const driverRoutes = require ('./routes/postsRamona'); //postRoutes->driverRoutes

//Disni
const ticketRoutes= require('./routes/postsDisni');

//dineth
const cardSchema = require('./routes/postsDineth');
const chargeRoutes = require('./routes/recharge');

//azmie
const postRoutes = require ('./routes/locations');
//anodya

const postAnodyaRoutes = require ('./routes/postAnodya');
const postRental = require ('./routes/rentalcost');
const postAdminsignup = require ('./routes/adminsignup');

//pasindu
const postRoutesPasi = require ('./routes/postsPasi');
const postRoutesPasindu = require ('./routes/postsPasindu');

//Savinu
const postRoutesSavinu = require ('./routes/postsSavinu');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
//nisura
app.use(postRoutesNisura);

app.use(driverRoutes);
//Disni
app.use(ticketRoutes);

//dineth
app.use(cardSchema);
app.use(chargeRoutes);

//azmie
app.use(postRoutes);

//anodya 
app.use(postAdminsignup);
app.use(postAnodyaRoutes);
app.use(postRental);

//pasindu

app.use(postRoutesPasindu);
app.use(postRoutesPasi);

//Savinu
app.use(postRoutesSavinu);


const PORT = 8000;
const DB_URL ='mongodb+srv://admin:admin@project.shu8e.mongodb.net/travellingExpress?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connection successfully!!');
})
.catch((err)=> console.log('DB Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});