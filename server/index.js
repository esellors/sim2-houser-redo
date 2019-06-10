require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
let { SERVER_PORT } = process.env;
let {createProperty} = require('./controller')

app.use(express.json());


massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance)
  })

app.post('/api/property', createProperty )


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
  