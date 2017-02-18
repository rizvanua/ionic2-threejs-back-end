/**
 * Created by Roman on 15.02.2017.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tempDataSchema = new Schema({
    temp:{
        type:Object
    },
    indexing:{
        type:Number
    }
});

// the schema is useless so far
// we need to create a model using it
let tempDataObjects = mongoose.model('tempData', tempDataSchema);

// make this available to our Node applications
module.exports = tempDataObjects;