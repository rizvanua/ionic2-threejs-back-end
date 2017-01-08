/**
 * Created by Roman on 04.01.2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const querystring = require('querystring');

const mainDataObjects= require('../models/mainData');
let getMainDataRouter = express.Router();
getMainDataRouter.use(bodyParser.json());
currentDate = new Date();
const startOld = new Date();
startOld.setHours(0,0,0,0);
//console.log('start '+startOld);

const endOld = new Date();
endOld.setHours(23,59,59,999);
//console.log('end '+endOld);
//const start=moment().startOf('day').toISOString();
/*const end = moment().endOf('day').toISOString();
const startWeek=moment().startOf('week');
const endWeek = moment().endOf('week');*/
console.log(startOld);
console.log(endOld);
//console.log(start);
//console.log(startWeek);
//console.log(endWeek);
/*let start = moment().startOf('day').toDate().toString();
let end = moment().endOf('day').toDate().toISOString();*/
getMainDataRouter.route('/')
    .get((req,res)=>{
        console.log(req._parsedUrl);
        let period=req._parsedUrl;
        let gueryUrl=querystring.parse(req._parsedUrl.query);
        console.log(gueryUrl);
        mainDataObjects.aggregate([
            {
                $match: {time: {$gte: new Date(gueryUrl.start), $lt: new Date(gueryUrl.end)}}
            },
            {$group:
            {_id :{name:"$name"},count: { $sum: 1 } }
            }
        ]).then((mainData)=>{
            res.json({mainData});
            console.log('We get Data')
        },(e)=>{
            res.status(400).send(e);
        })
    });

/*getMainDataRouter.route('/')
    .get((req,res)=>{
        mainDataObjects.find({'time': {$gte: start, $lt: end}}).then((mainData)=>{
            res.send({mainData});
        },(e)=>{
            res.status(400).send(e);
        })
    });*/

module.exports = getMainDataRouter;