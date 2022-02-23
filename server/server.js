const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "tokstokdb",
});

app.post("/create", (req, res) => {
  const nome = req.body.nome;
  const razao = req.body.razao;
  const cnpj = req.body.cnpj;
  const segmento = req.body.segmento;
  const endereco = req.body.endereco;
  const telefone = req.body.telefone;
  const email = req.body.email;

  db.query(
    "INSERT INTO suppliers (nome, razao, cnpj, segmento, endereco, telefone, email) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nome, razao, cnpj, segmento, endereco, telefone, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data inserted");
      }
    }
  );
});

app.get("/fornecedores", (req, res) => {
  db.query("SELECT * FROM suppliers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server started at port 3001 🚀");
});
