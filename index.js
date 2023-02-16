const express = require('express');

const app = new express()

app.use(express.static('./public'));
app.use(express.json())

app.get('/api/message', (req, res) => {
  res.send('OK');
})


app.listen(8000);
