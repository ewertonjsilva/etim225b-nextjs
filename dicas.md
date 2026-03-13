Melhores Práticas de Uso
Acessibilidade: Sempre utilize a tag <label> vinculada ao seu <input> através do atributo htmlFor (no React) e id.

Performance: Para tabelas muito grandes carregadas via JSON, considere usar bibliotecas como react-window para virtualização.

Vite Assets: Para a tag <img>, se a imagem estiver na pasta src/assets, você deve importá-la como um módulo: import logo from './assets/logo.png'. Se estiver em public/, use o caminho direto /logo.png.

