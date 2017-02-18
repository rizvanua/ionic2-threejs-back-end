/**
 * Created by Roman on 14.02.2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

const tempDataObjects= require('../models/tempDataSchema');
let postTempRouter = express.Router();
postTempRouter.use(bodyParser.json());

postTempRouter.route('/')
    .post((req, res)=>{

        tempDataObjects.find({indexing:1}).findOneAndUpdate({},{temp:req.body.temp},{new: true, upsert: true}).then((doc)=>{
            //console.log('saved',doc);
            res.send(doc);

        }, (e)=>{
            console.log('Unable to save');
            res.status(400).send(e);
        });
    });

module.exports = postTempRouter;