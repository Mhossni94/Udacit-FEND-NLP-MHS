const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!')
})

app.post('/test', function (req, res) {
    console.log("here is API");
    // console.log(res)
    // console.log(req.body)
    console.log(req.body.text);

    textapi.sentiment({
        'text': req.body.text
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(JSON.stringify({result:response}))
        }
        else 
    res.send(JSON.stringify({result:"API Error",error:error}))
    console.log(error);

      });
     
})
