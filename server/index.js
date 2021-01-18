const express = require('express');
const port = 4004;

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () =>
  console.log(`listening on port ${port}`));