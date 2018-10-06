const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send();  
});
// app.post('/', (req, res) => {
//   res.send({name: 'adadd'})
// });
let server = app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
module.exports = server;