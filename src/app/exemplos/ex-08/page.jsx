export function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Simulando JSON de API
        const dadosApi = [
            { id: 1, nome: "Notebook", preco: 4500, img: "https://via.placeholder.com/50" },
            { id: 2, nome: "Mouse", preco: 150, img: "https://via.placeholder.com/50" }
        ];
        setProdutos(dadosApi);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map(p => (
                    <tr key={p.id}>
                        <td><img src={p.img} alt={p.nome} style={{ borderRadius: '50%' }} /></td>
                        <td>{p.nome}</td>
                        <td>R$ {p.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}