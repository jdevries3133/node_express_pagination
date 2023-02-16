const express = require('express');

const app = new express()

app.use(express.static('./public'));
app.use(express.json())

app.get('/api/message', (req, res) => {
  res.json(messages);
})


app.listen(8000);


// mock database
const messages = [
  {
    id: 1,
    msg: 'hi'
  },
  {
    id: 2,
    msg: 'hey'
  },
  {
    id: 3,
    msg: 'hello'
  },
  {
    id: 4,
    msg: 'salut'
  },
  {
    id: 5,
    msg: 'bonjour'
  },
  {
    id: 6,
    msg: 'ca va?'
  },
]
