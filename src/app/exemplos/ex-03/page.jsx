import { useState } from 'react';

export function FormComponent() {
    const [formData, setFormData] = useState({ nome: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando para API:", formData);
        // Aqui você faria um POST para sua API
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
            <label htmlFor="user">Nome do Usuário:</label>
            <input
                id="user"
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
            <button type="submit">Enviar Cadastro</button>
        </form>
    );
}