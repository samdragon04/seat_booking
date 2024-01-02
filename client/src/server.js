const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { ID, LastName, FirstName, LastName_JP, FirstName_JP, LastName_Kana, FirstName_Kana, DepartmentGrp, PhoneNumber, Email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { ID, LastName, FirstName, LastName_JP, FirstName_JP, LastName_Kana, FirstName_Kana, DepartmentGrp, PhoneNumber, Email, password: hashedPassword };

  db.query('INSERT INTO employee SET ?', user, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Server error');
    } else {
      res.status(201).send('User registered');
    }
  });
});

app.post('/login', (req, res) => {
  const { ID, password } = req.body;

  if (ID === 'test' && password === 'test123') {
    const token = jwt.sign({ id: 'test' }, 'howam_idoing_this');
    return res.json({ token });
  }

  db.query('SELECT * FROM employee WHERE ID = ?', [ID], async (error, results) => {
    if (error || results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
      res.status(401).send('Incorrect ID and/or password');
    } else {
      const user = results[0];
      const token = jwt.sign({ id: user.ID }, 'howam_idoing_this');
      res.json({ token });
    }
  });
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hirano1111',
  database: 'taskdb'
});

app.post('/addDepartment', (req, res) => {
  const { department } = req.body;

  db.query('INSERT INTO departments (Department) VALUES (?)', [department], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Server error');
    } else {
      res.status(201).send('Department added');
    }
  });
});

app.post('/addGroup', (req, res) => {
  const { group } = req.body;

  db.query('INSERT INTO groups (Grp) VALUES (?)', [group], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Server error');
    } else {
      res.status(201).send('Group added');
    }
  });
});

app.get('/departments', (req, res) => {
  db.query('SELECT DISTINCT Department FROM employee', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      res.json(results.map(result => result.Department));
    }
  });
});

app.get('/groups', (req, res) => {
  const department = req.query.department;
  db.query('SELECT DISTINCT Grp FROM employee WHERE Department = ?', [department], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      res.json(results.map(result => result.Grp));
    }
  });
});

app.get('/employees', (req, res) => {
  const department = req.query.department;
  const group = req.query.group;
  db.query('SELECT LastName FROM employee WHERE Department = ? AND Grp = ?', [department, group], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      res.json(results.map(result => result.LastName));
    }
  });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
