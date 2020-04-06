const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

require("./models/carOwners");

const app = express();

mongoose.Promise = global.Promise;
const DBConnection = process.env.MONGODB_URI || `mongodb://localhost:27017/product-filter`;
const db = mongoose.connect(DBConnection, { useUnifiedTopology: true, useNewUrlParser: true });

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});

// IMPORT ROUTES
const APIRouteManager = require("./routes/APIRouteManager");

// ADD ROUTES AS MIDDLEWARE
app.use("/api", APIRouteManager(app));

module.exports = app;