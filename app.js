const express = require('express'),
    path = require('path'),
    api = require('./routes/api'),
  bodyParser = require('body-parser');

// create a new express server
const app = express();

// serve the files out of ./public as our main files
app.use(express.static(path.resolve(__dirname, 'public')));

// configure bodyParser
app.use(bodyParser.json());

app.use('/api/hello', api.getText);
app.use('/api/helloJson', api.getObject);

// start server on the specified port and binding host
const port = process.env.PORT || '3000';
app.listen(port, '0.0.0.0', () => {
  console.log('server starting on ' + port);
});

module.exports = app;