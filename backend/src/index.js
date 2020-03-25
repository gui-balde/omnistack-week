const express = require('express');
const routes = require('./routes')
const cors = require('cors')

app = express();

/** Before routing requests to methods, transform the payload into JSON */
app.use(express.json());
app.use(routes);

/** Will configure what clients can access our backend */
app.use(cors());

app.listen(3333);