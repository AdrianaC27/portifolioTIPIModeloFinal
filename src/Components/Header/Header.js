import StyleHeader from './StyleHeadr.module.css';
import Logo from '../images/logo.png';

function Header(props) {
    return(
        <div className={StyleHeader.hdiv}>
            <img src={Logo} className={StyleHeader.himg}/>
            <h1 className={StyleHeader.hh1}>{props.titulo}</h1>
        </div>
    )
}

export default Header;