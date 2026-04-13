'use client'

import { useState } from 'react'; 

import styles from './page.module.css';

export default function FormComponent() {

    // const [formData, setFormData] = useState({ nome: '', email: '' });
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário enviados!');
        console.log(`Usuário: ${login} \nSenha: ${senha}`);
        // console.log("Enviando para API:", formData);
        // Aqui você faria um POST para sua API
    };
    

    return (
        <div className={styles.container}>

            <h1>Exemplo 5 - Formulário</h1>
            <h2>Login</h2>

            <form onSubmit={handleSubmit} className={styles.formulario}>                
                <input
                    name="login"
                    type="text" 
                    placeholder='usuário'
                    onChange={ e => setLogin(e.target.value)}
                // value={formData.nome}
                // onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
                <input
                    name="senha"
                    type="password" 
                    placeholder='senha' 
                    onChange={ e => setSenha(e.target.value)}
                // value={formData.nome}
                // onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
                <button type="submit">Acessar sistema</button>
            </form>
        </div>
    );
}