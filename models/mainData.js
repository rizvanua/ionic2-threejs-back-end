/**
 * Created by Roman on 03.01.2017.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let mainDataSchema = new Schema({
    face:{
        type:Object,
        required: true
    },
    point:{
        type:Object,
        required: true
    },
    time:{
        type: Date,
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
let mainDataObjects = mongoose.model('mainData', mainDataSchema);

// make this available to our Node applications
module.exports = mainDataObjects;