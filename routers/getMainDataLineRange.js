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
        console.log(req._parsedUrl);
        let period=req._parsedUrl;
        let gueryUrl=querystring.parse(req._parsedUrl.query);
        console.log(gueryUrl);
        mainDataObjects.aggregate([
            {
                $match: {time: {$gte: new Date(gueryUrl.start), $lt: new Date(gueryUrl.end)}}
            },
            {
                $project: {
                    level:"$level",
                    time:{
                        $dateToString: { format: "%Y-%m-%d", date: "$time" }
                    }

                }
            },
            {
                $group:
                    {_id :{level:"$level", time:"$time"},count: { $sum: 1 } }
            }
        ]).then((mainData)=>{
            res.json({mainData});
            console.log('We get Data')
        },(e)=>{
            res.status(400).send(e);
        })
    });



module.exports = getMainDataRouter;