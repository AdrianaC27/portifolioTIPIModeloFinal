import StyleSobreMim from './StyleSobremim.module.css';
import Logo from '../images/logo.png';
import Header from '../Header/Header';
import Paragrafo from '../Paragrafo/Paragrafo';
import VoltaHome from '../VoltaHome/VoltaHome';

function SobreMim() {
    let pSobre = "Como um bruxo do mundo mágico, mergulhei nas profundezas encantadas da programação e do desenvolvimento web. Meu nome é Harry Potter," 
                +"e assim como domino feitiços em Hogwarts, também domino as linguagens de programação. Com uma varinha e um teclado, conjuro códigos mágicos" 
                +"que transformam linhas de texto em experiências mágicas online. Da Sala Precisa aos servidores na nuvem, minha jornada como Desenvolvedor Full"
                + "Stack é tão épica quanto derrotar Lord Voldemort. Desafios são como Horcruxes, e estou determinado a resolvê-los com a mesma coragem que usei" 
                + "para enfrentar as trevas. Lumos no código e avante, para construir um mundo digital repleto de possibilidades!";

    return(
        <>
            <Header titulo="Sobre Mim"/>
            <div className={StyleSobreMim.pdiv}>
                <Paragrafo texto={pSobre}/>
            </div>
            <VoltaHome/>
        </>
    )
}

export default SobreMim;