const express = require('express');
const routes = require('./routes')
const cors = require('cors')

app = express();

/** Will configure what clients can access our backend */
app.use(cors());
/** Before routing requests to methods, transform the payload into JSON */
app.use(express.json());
app.use(routes);

app.listen(3333);