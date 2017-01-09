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

getMainDataRouter.route('/')
    .get((req,res)=>{
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