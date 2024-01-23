import StyleParagrafo from './StyleParagrafo.module.css';
import Logo from '../images/logo.png';

function Paragrafo(props) {
    return(
        <div className={StyleParagrafo.hdiv}>
            <p>{props.texto}</p>
        </div>
    )
}

export default Paragrafo;