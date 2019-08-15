const express = require('express');
const path = require('path');
var cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
// app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(__dirname));


// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
console.log('listening on port:', port);
app.listen(port);