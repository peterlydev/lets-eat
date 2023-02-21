require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.get('/', function (req, res) {
  res.json({mssg: "Welcome to the Let's Eat app!"})
});


app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
});

