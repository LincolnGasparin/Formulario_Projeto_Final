import React, { useState } from 'react';
import './Home.css'; 
import axios from "axios"

function Home() {


const [nome, setNome] = useState();
const [email, setEmail] = useState();


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3333/inserir-usuario',{
      nome,
      email
    });
    console.log('Dados enviados com sucesso:', response.data);
    // Adicione lógica de sucesso aqui (ex: limpar o formulário, mostrar mensagem)
  } catch (error) {
    console.error('Erro ao enviar dados do formulário:', error);
    // Adicione lógica de erro aqui (ex: mostrar mensagem de erro ao usuário)
  }
};


    return (
        // 2. Um container para centralizar o formulário na página
        <div className="login-page-container">
            {/* 3. Usamos a tag <form> para semântica e funcionalidade */}
            <form className="login-form">
                <h1>Acessar</h1>
                <div className="input-group">
                    {/* 4. Labels para acessibilidade */}
                    <label htmlFor="username">Nome</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Digite seu usuário"
                        required
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} type="submit">Login</button>
            </form>
        </div>
    );
}

export { Home };