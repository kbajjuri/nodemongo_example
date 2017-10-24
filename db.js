var mongoose = require('mongoose');
mongoose.connect("mongodb://userName:<<Password>>@host1:27017,host2:27017,host3:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", 
{useMongoClient: true},
function(err) {
    if(err) console.log("Error Connecting Database: "+err);

    console.log("Successfully connected to database: ");
});
// promise.then(function(db) {
    
// });
