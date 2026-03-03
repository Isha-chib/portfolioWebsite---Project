const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const users = [{ username: 'admin', password: bcrypt.hashSync('password', 8) }];
const projects = [
  { id: 1, title: 'Portfolio Website', description: 'A personal portfolio site.' },
  // Add more projects as needed
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});