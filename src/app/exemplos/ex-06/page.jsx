'use client'

import { useState, useEffect } from 'react';

import styles from './page.module.css';

export default function InputsComplexos() {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [comentario, setComentario] = useState("");

    // Simulando carregamento de API (JSON)
    useEffect(() => {
        const mockAPI = ["Tecnologia", "Educação", "Saúde"];
        setCategorias(mockAPI);
    }, []);

    function handleSelecionaCategoria(categoria) {
        setCategoriaSelecionada(categoria);

        // Não exibe o valor atualizado do state, pois a tela ainda não foi renderizada
        // console.log(setCategoriaSelecionada); 

        // Para exibir o valor atualizado é necessário apresentar o valor que foi passado para o state
        console.log(categoria);
        // outra opção seria inserir o console.log fora da função
    }


    /*
        Duas ferramentas que ajudam a conferir valores de state:
        React DevTools: É uma extensão para o navegador (Chrome/Edge/Firefox). Ela adiciona uma aba "Components" no seu console onde você pode clicar no componente e ver todos os hooks e states mudando em tempo real, sem precisar escrever uma linha de código.

        JSON.stringify: Às vezes, para conferir estados que são objetos ou arrays grandes, colocar isso no meio do seu HTML ajuda a visualizar a mudança na hora:
        <pre>{JSON.stringify(categoriaSelecionada, null, 2)}</pre>
    */

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Exemplo 6 - Variações de entrada de dados</h1>
            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Idade</label>
                    <input type="number" className={styles.input} placeholder="0" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Cor Favorita</label>
                    <input type="color" className={`${styles.input} styles.colorPicker`} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Data de Nascimento</label>
                <input type="date" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Categoria de Interesse</label>
                <select
                    className={styles.select}
                    value={categoriaSelecionada}
                    onChange={e => handleSelecionaCategoria(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Bio / Comentários</label>
                <textarea
                    className={styles.textarea}
                    placeholder="Conte um pouco sobre você..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                />
            </div>
        </div>
    );
}