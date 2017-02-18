/**
 * Created by Roman on 03.01.2017.
 */

    /*assert = require('assert');*/
const  express = require( 'express');
const mongoose= require('./mongoose');
const app = express();
let bodyParser = require('body-parser');

/*Routers*/
let getMainDataPie = require('./routers/getMainDataPie');
let getMainDataLineDay = require('./routers/getMainDataLineDay');
let getMainDataLineWeek = require('./routers/getMainDataLineWeek');
let getMainDataLineMonth = require('./routers/getMainDataLineMonth');
let getMainDataLineYear = require('./routers/getMainDataLineYear');
let getMainDataLineRange = require('./routers/getMainDataLineRange');
let getTestData = require('./routers/getTestData');
let postMainData = require('./routers/postMainData');
let postTemp = require('./routers/postTemp');
let getTemp = require('./routers/getTemp');


app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.use('/getMainDataPie', getMainDataPie);
app.use('/getMainDataLineDay', getMainDataLineDay);
app.use('/getMainDataLineWeek', getMainDataLineWeek);
app.use('/getMainDataLineMonth', getMainDataLineMonth);
app.use('/getMainDataLineYear', getMainDataLineYear);
app.use('/getMainDataLineRange', getMainDataLineRange);
app.use('/getTestData',getTestData);
app.use('/postMainData', postMainData);
app.use('/postTemp', postTemp);
app.use('/getTemp', getTemp);

app.get('/', (req, res)=> {
    res.send('Hello World!')
});

// catch 404 and forward to error handler
app.use((req, res, next)=> {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
    res.send('Not Found')
});
/*
// If you are going to use back-end and front-ent on one server use the code below
 app.get('/', function (req, res) {
 res.sendFile('index.html', { root: __dirname });
 });


 // catch 404 and forward to error handler
 app.use(function (req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
 res.send('Not Found');
 });

 app.listen(8080,'0.0.0.0', function () {
 console.log('Example app listening on port 8080!');
 });
 */
app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!')
});

module.exports = app;