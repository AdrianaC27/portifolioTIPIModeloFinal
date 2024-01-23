import Elementos from '../Elementos/Elementos';
import Header from '../Header/Header';
import StyleContatos from './StyleContatos.module.css';
import Email from '../images/email.png';
import In from '../images/in.png';
import Git from '../images/git.png';
import VoltaHome from '../VoltaHome/VoltaHome';

function Contatos() {
    return(
        <>
        <Header titulo='Contatos'/>
        <div className={StyleContatos.hdiv}>
            <Elementos img={Email} titulo="harry.potter.dev@gmail.com"/>
            <Elementos img={In} titulo="linkedin.com/in/harrypotterdev"/>
            <Elementos img={Git} titulo="github.com/hpotterwizard"/>
       </div>
       <VoltaHome/>
        </>
    )
}

export default Contatos;