const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes');

const {json, urlencoded} = express;

const app = express();


const port = process.env.PORT || 8080;

const corsOptions = {
    origin: "-",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(json({}));

app.use(urlencoded({extended: false}));

app.use(router);

app.use('/home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/html/index.html'));
})

app.use("/app",(req,res)=>{
    res.send("Hello microservices");
})

app.listen(port, ()=>{
    console.log('Server in the port $(port)');
})