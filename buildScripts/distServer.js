// This is NOT for actual production use. 
// This is useful for hosting the minified production build for local debugging purposes
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Gene", "lastName": "Belcher", "email": "gene@themachine.com"},
    {"id": 2, "firstName": "Tina", "lastName": "Belcher", "email": "tina@horselovers.com"},
    {"id": 3, "firstName": "Bob", "lastName": "Belcher", "email": "bobs@burger.com"}
  ]);
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});
