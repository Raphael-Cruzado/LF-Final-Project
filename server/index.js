require('dotenv/config');
const path = require('path');
const express = require('express');
const db = require('./db');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

app.get('/api/users', (req, res, next) => {
  const sql = `
    select "userId",
          "firstName",
          "lastName",
          "email",
          "hashedPassword"
    from users;
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
