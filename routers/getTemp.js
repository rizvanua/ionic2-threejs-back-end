/**
 * Created by Roman on 15.02.2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const querystring = require('querystring');

const tempDataObjects= require('../models/tempDataSchema');
let getTempDataRouter = express.Router();
getTempDataRouter.use(bodyParser.json());


getTempDataRouter.route('/')
    .get((req,res)=>{
        tempDataObjects.find('temp').then((mainData)=>{
            res.json({mainData});
            //console.log('We get Data')
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

module.exports = getTempDataRouter;