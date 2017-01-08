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
                        $switch:
                        {
                            branches: [
                                {
                                    case: { $eq: [{$dateToString: { format: "%m", date: "$time" }}, '01' ]},
                                    then: "January"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '02' ] },
                                    then: "February"
                                },
                                {
                                    case: { $eq: [{$dateToString: { format: "%m", date: "$time" }}, '03' ] },
                                    then: "March"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '04' ] },
                                    then: "April"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '05' ] },
                                    then: "May"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '06' ] },
                                    then: "June"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '07' ] },
                                    then: "July"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '08' ] },
                                    then: "August"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '09' ] },
                                    then: "September"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '10' ] },
                                    then: "October"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '11' ] },
                                    then: "November"
                                },
                                {
                                    case: { $eq: [ {$dateToString: { format: "%m", date: "$time" }}, '12' ] },
                                    then: "December"
                                }
                            ]
                        }
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