/**
 * Created by Roman on 04.01.2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

const mainDataObjects= require('../models/mainData');
let portMainDataRouter = express.Router();
portMainDataRouter.use(bodyParser.json());
portMainDataRouter.route('/')
    .post((req, res)=>{
    let newMainDataObject = new mainDataObjects({
        face:req.body.face,
        point:req.body.point,
        time:req.body.time,
        level:req.body.level,
        name:req.body.name,
        userName:req.body.userName
    });

    newMainDataObject.save().then((doc)=>{
        console.log('saved',doc);
        res.send(doc);

    }, (e)=>{
        console.log('Unable to save');
        res.status(400).send(e);
    });
});

module.exports = portMainDataRouter;