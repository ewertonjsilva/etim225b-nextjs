import Image from "next/image";
import styles from "./page.module.css";

function Home() {
  return (
    <div style={{border: '2px solid #ff0', display: 'flex', flexDirection: 'column'}}>
      <h1>React com Next JS</h1>
      <h2>Aula de introdução</h2>
      <h3>Leiaute e Estilização</h3>
      <p>Nesta aula iremos entender o uso de CSS global e local.</p>
      <label>Exemplo Label</label>
      <small>Exemplo Small</small>
      <div style={{border: '2px solid #00f', display: 'flex', flexDirection: 'column'}}>
        <div style={{ height: '30px', width: '30px', backgroundColor: '#f00' }}></div>
        <div style={{ height: '30px', width: '30px', backgroundColor: '#0f0' }}></div>
      </div>
    </div>
  );
}

export default Home;
