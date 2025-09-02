import React, { useState } from 'react';
import './Home.css'; 

function Home() {


const [nome, setNome] = useState();
const [email, setEmail] = useState();


async function enviarUsuario() {

const form = new FormData();
form.append("nome", nome);
form.append("email", email);

const response = await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    mode: "cors",
    body: form,
});



}



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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export { Home };