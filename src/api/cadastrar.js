import mysql, { createConnection } from "mysql2";
import express from "express";



const app = express();
app.use(express.json());


const connection = mysql.createConnection({
    localhost:"127.0.0.1",
    user:"root",
    database:"formulario",
    port:"3306"
})


async function cadastrar(usuario) {
    const sql = 'INSERT INTO clientes(nome, email) VALUES (?,?);';
    const values = [usuario.nome, usuario.email];
    await client.query(sql, values);
}

module.exports = { cadastrar }

app.post("/usuarios", async (req,res)=>{

    await connection.cadastrar(req.body);
    res.sendStatus(200);
})


app.listen(3000)