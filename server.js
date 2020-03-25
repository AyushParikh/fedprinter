var port = 8000;
var express = require('express');
var app = express();
var history = [];

// http://www.sqlitetutorial.net/sqlite-nodejs/connect/
const sqlite3 = require('sqlite3').verbose();

// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

var bears = 0;
var bulls = 0;
setInterval(
    function(){
        bears = 0;
        bulls = 0;
    }, 
86400000);


app.post('/api/vote/', function(req, res) {
    var vote = req.body.vote;
    
    if (vote == 1){
        bulls++;
    } else {
        bears++;
    }

    res.status(200).send({"bulls": bulls, "bears": bears});
});

app.use(express.static('static-content'));


app.listen(port, function() {
    console.log('Server has started listening on port ' + port);
});