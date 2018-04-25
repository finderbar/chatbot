const next = require('next');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const port = process.env.PORT || 3200;

const apiai = require('apiai');
const apiAiServiceFulfillment = apiai(process.env.ACCESS_TOKEN, { language: "en" });

const {
  handleFulfillmentRequest,
  isFulfillmentRequest
} = require('./server');

app.prepare()
.then(() => {
  server.use(cors());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  server.use('/static', express.static('static'));

  server.get('/', (req, res) => app.render(req, res, '/'));

  server.get('*', (req, res) => app.render(req, res, '/', req.query));

  server.post('/webhook/',  (req, res) => {
   	if (isFulfillmentRequest()) {
   		if (req.body.status.code === 200) {
  			handleFulfillmentRequest(req, res, data);
  		}
  	}
  });

  server.listen(port, (err) => {
    if (err) { throw err; }
    console.log(`> Ready on http://localhost:${port}`);
  });

});
