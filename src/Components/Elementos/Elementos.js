import StyleElementos from './StyleElementos.module.css';
import { useNavigate } from "react-router-dom";
 

function Elementos({img, titulo, tituloInicio,link}) {   
    return(
        <>
        <div className={StyleElementos.hdiv}>
            {
                tituloInicio? 
                <>
                    <h1>{titulo}</h1>
                    <img onClick={link} src={img}/>
                </>
                :  
                <>
                    <img src={img}/>
                    <h1>{titulo}</h1>
                </>
            }
        </div>
        </>
    )
}

export default Elementos;