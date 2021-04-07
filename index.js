const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();


app.use(express.json());
app.use(cors());

let db = new sqlite3.Database("./database/Db.sqlite", (err) => {
    if(err) {
      console.log("not connect to database", err)
    } else {
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT
      )`, (err, row) => {
        if(err) {
          throw err
        }
        console.log("Table create")
    })
  }})

app.get('/proj', (req, res) => {
    db.all("SELECT * FROM users" , [], (err, rows) => {
      if(err) {
        console.log('error', err.message)
      } else {
        return res.json(rows)
      }
    })
});

app.get('/proj/:id', (req, res ) => {
  const { id } = req.params
  db.all("SELECT id, title, description FROM users WHERE id = ?" , [id], (err, rows) => {
    if(err) {
      console.log('error', err.message)
    } else {
      return res.json(rows)
    }
  })
})

app.post('/proj', (req, res) => {
    const { id, title, description } = req.body
    db.run(`INSERT INTO users(id, title, description) VALUES(?, ?, ?)`, [id, title, description], err => {
      if(err){
        console.log('error', err.message)
      } else {
        return res.status(200).send()
      }
    })
})

app.put('/proj/:id', (req, res) => {
    const { id } = req.params
    const { title, description} = req.body
    
    db.run(`UPDATE users SET title = ?, description = ? WHERE id = ?`, [title, description, id], err => {
      if(err) {
        console.log("erro: ", err.message)
      } else {
        return res.status(200).send()
      }
    })
})

app.delete('/proj/:id', (req, res) => {
    const { id } = req.params;
    
    db.run(`DELETE FROM users WHERE id = ?`, [id], err => {
      if(err) {
        console.log("erro: ", err.message)
      } else {
        return res.status(200).send()
      }
    })
})


app.listen(8080);