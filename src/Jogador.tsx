import "./Jogador.css";

interface JogadorProps {
    nome?: string;
    posicao?: string;
    nota?: number;
    preco?: number;
}
export default function Jogador ({nome, posicao, nota, preco}: JogadorProps) {
    return (
        <div className="jogador">
            <div className="nome">{nome}</div>
            <div className="posicao">{posicao}</div>
            <div className="nota">{nota?.toLocaleString()}</div>
            <div className="precoJogador">{preco?.toLocaleString()}</div>
        </div>
    )
}