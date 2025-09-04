import mysql from "mysql2"
import express from "express"
import cors from "cors"


const app = express()

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

async function Conectar() {

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'formulario',
  port: 3306,
  password: '1234'
});
    return connection;
}


app.post('/inserir-usuario', async (req, res) => {
        const { nome, email } = req.body; // Obtém dados do corpo da requisição
       const conn = await Conectar();
        // 4. Preparar e executar o comando SQL
        const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
        conn.execute(sql, [nome, email], (err, result) => {
            if (err) {
                console.error('Erro ao inserir dados:', err);
                res.status(500).send('Erro ao inserir dados no banco de dados');
                return;
            }
            console.log('Usuário inserido com sucesso!');
            res.send({ message: 'Usuário inserido com sucesso!', userId: result.insertId });
        });
});


app.listen(PORT ,() => {
    console.log("Servidor start na porta : 3333")
})