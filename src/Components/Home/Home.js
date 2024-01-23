import styleHome from './Home.module.css';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function Home() {
    return(
        <div className={styleHome.dad}>
            <main>
                <div className={styleHome.txtHome}>
                    <h1>Olá, me chamo <span>Harry!</span></h1>
                    <h2>Sou desenvolvedor Full Stack</h2>
                </div>
                <div className={styleHome.dadLogo}>
                    <img src={Logo} alt="logo" />
                </div>
            </main>
            <footer>
                <Link to="sobremim">Sobre mim</Link>
                <Link to="meusprojetos">Meus Projetos </Link>
                <Link to="habilidade">Habilidades</Link>
                <Link to="contatos">Contato</Link> 
            </footer>
        </div>
    )
}

export default Home;
