import './App.css'
import Campo from './Campo'
import Jogador from './Jogador'

function App() {

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Fantasy Brasileirão</div>
        <nav className="nav">
          <a href="#">Meu Time</a>
          <a href="#">Mercado</a>
          <a href="#">Parciais</a>
          <a href="#">Classificação</a>
        </nav>
      </header>

      <main className="main">
        <section className="info-section">
          <h1>Monte seu Time dos Sonhos</h1>
          <p>Escale os melhores jogadores e dispute com seus amigos!</p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">C$ 100,00</span>
              <span className="stat-label">Cartoletas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">11/11</span>
              <span className="stat-label">Escalados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">65.2</span>
              <span className="stat-label">Pontos</span>
            </div>
          </div>
        </section>

        <Campo>
          <div style={{display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Jogador nome="Cássio" posicao="GOL" nota={7.2} preco={6.8} />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', gap: '12px', flexWrap: 'wrap'}}>
            <Jogador nome="Wesley" posicao="LAT" nota={6.5} preco={5.2} />
            <Jogador nome="Léo Ortiz" posicao="ZAG" nota={7.2} preco={7.8} />
            <Jogador nome="João Marcelo" posicao="ZAG" nota={6.8} preco={5.5} />
            <Jogador nome="Alex Sandro" posicao="LAT" nota={6.3} preco={4.2} />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', gap: '12px', flexWrap: 'wrap'}}>
            <Jogador nome="Matheus Henrique" posicao="VOL" nota={7.1} preco={7.5} />
            <Jogador nome="De la Cruz" posicao="MEI" nota={8.1} preco={12.4} />
            <Jogador nome="Matheus Pereira" posicao="MEI" nota={8.3} preco={13.2} />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', gap: '12px', flexWrap: 'wrap'}}>
            <Jogador nome="Gabriel Veron" posicao="ATA" nota={6.7} preco={6.9} />
            <Jogador nome="Pedro" posicao="ATA" nota={8.5} preco={15.8} />
            <Jogador nome="Lautaro Díaz" posicao="ATA" nota={7.0} preco={8.3} />
          </div>
        </Campo>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre</h3>
            <ul>
              <li><a href="#">Como Jogar</a></li>
              <li><a href="#">Regras</a></li>
              <li><a href="#">Dúvidas</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Suporte</h3>
            <ul>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Fantasy Brasileirão - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
