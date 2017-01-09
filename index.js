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

app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!')
});

module.exports = app;