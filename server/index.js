const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'api_mysql',
});

app.use(cors());

app.get("/api/get/user/", (req, res) => {
  const sqlSelect = "SELECT * FROM user ORDER BY id";
    db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});