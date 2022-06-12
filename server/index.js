require('dotenv/config');
const path = require('path');
const express = require('express');
const db = require('./db');
const argon2 = require('argon2');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));
app.use(express.json());

app.get('/api/users', (req, res, next) => {
  const sql = `
    select *
    from "users"
    order by "userId"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/users/:userId', (req, res, next) => {
  const userId = 10;
  // const userId = Number(req.params.userId);
  if (!Number.isInteger(userId) || userId < 1) {
    throw new ClientError(400, 'userId must be positive Interger');
  }
  const sql = `
    select *
    from "users"
    where "userId" = $1
  `;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/classes', (req, res, next) => {
  const sql = `
    select *
    from "classes"
    order by "classId"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/classes/:classId', (req, res, next) => {
  const classId = Number(req.params.classId);
  if (!Number.isInteger(classId) || classId < 1) {
    throw new ClientError(400, 'userId must be positive Interger');
  }
  const sql = `
    select *
    from "classes"
    where "classId" = $1
  `;
  const params = [classId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/classes', (req, res, next) => {
  const className = req.body.classItemText;
  const userId = req.body.user;
  if (!className) {
    throw new ClientError(400, 'class name is a required field');
  }
  const sql = `
    insert into "classes" ("className", "userId")
    values ($1, $2)
    returning *
  `;
  const params = [className, userId];
  db.query(sql, params)
    .then(result => {
      const [newClass] = result.rows;
      res.status(201).json(newClass);
    })
    .catch(err => next(err));
});

app.delete('/api/classes/:classId', (req, res, next) => {
  const classId = Number(req.params.classId);
  if (!Number.isInteger(classId) || classId < 1) {
    throw new ClientError(400, 'class Id must be a positive integer');
  }
  const sql = `
  delete from "classes"
  where "classId" = $1
  returning *
  `;
  const params = [classId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-up', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    throw new ClientError(400, 'first name, last name, email, and password are required fields');
  }

  // batman password = 123batman
  argon2.hash(password)
    .then(hashedPassword => {
      const sql = `
  insert into "users" ("firstName", "lastName", "email", "hashedPassword")
  values ($1, $2, $3, $4)
  order by "userId"
  returning *
  `;

      const params = [firstName, lastName, email, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [newUser] = result.rows;
      res.status(201).json(newUser);
    })
    .catch(err => next(err));

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
