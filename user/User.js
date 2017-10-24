var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
mongoose.connection.on('connected', function(){
    console.log("Connection established successfully");
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');