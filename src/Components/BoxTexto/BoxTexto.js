import StyleBoxTexto from './StyleBoxTexto.module.css';

function BoxTexto({titulo, texto}) {
    return(
        <div className={StyleBoxTexto.divTexto}>
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}

export default BoxTexto;