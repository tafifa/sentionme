// Import package
const express = require('express');
const bodyParser = require('body-parser');

// Configuration
const app = express();
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
const PORT = process.env.NODE_ENV !== 'production' ? '3000' : '5000';


// API
const predictRoutes = require('./api/predict/routes');
const predictHandlers = require('./api/predict/handler');

const datasetRoutes = require('./api/dataset/routes');
const datasetHandlers = require('./api/dataset/handler');

app.get('/', (req, res) => {
  res.send(`You are connected to the Server. Let's Configure it! `);
});

app.use(bodyParser.json());

app.use('/api', predictRoutes(predictHandlers));
app.use('/api', datasetRoutes(datasetHandlers));

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`);
});
