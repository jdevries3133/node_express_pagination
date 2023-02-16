const express = require('express');

const app = new express()

app.use(express.static('./public'));
app.use(express.json())
app.disable('etag');


// Our solution is going to be RESTful, because the data that we send back and
// forth is going to store the pagination state

/**
 * The number of items on each page
 */
const PAGE_SIZE = 2;

app.get('/api/message', (req, res) => {
  const page = typeof req.query.page === 'string'
    ? parseInt(req.query.page)
    : 0;

  if (isNaN(page)) {
    res.status(400).send('Invalid page number')
  }

  const start = page;
  const stop = start + PAGE_SIZE;
  const nextPage = start + PAGE_SIZE;
  const prevPage = Math.max(start - PAGE_SIZE, 0)

  // normally, a database would do this part - we're going to filter the full
  // set of messages into the subset that matches our page range
  //
  // In SQL, it might look like this:
  //
  //     SELECT * FROM messages WHERE id > ${start} and id < ${stop}
  const msgPage = messages.filter(({id}) => id >= start && id <= stop);

  res.json({
    data: msgPage,
    page: {
      previous: `/api/message?page=${prevPage}`,
      next: `/api/message?page=${nextPage}`
    }
  });
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
