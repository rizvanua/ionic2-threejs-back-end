/**
 * Created by Roman on 04.01.2017.
 */
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/IonicThreeJsDB';// change this to your real mongodb path
mongoose.connect(url, function(err) {
    mongoose.connection.db.dropDatabase();
});
mongoose.Promise=global.Promise;

module.exports = mongoose;