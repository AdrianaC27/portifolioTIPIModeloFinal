import Elementos from '../Elementos/Elementos';
import Header from '../Header/Header';
import StyleHabilidade from './StyleHabilidades.module.css';
import VoltaHome from '../VoltaHome/VoltaHome';
import React from '../images/react.png';
import Js from '../images/js.png';
import Css from '../images/css.png';
import Html from '../images/html.png';
import Sql from '../images/sql.png';
import Node from '../images/node.png';
import { useNavigate } from "react-router-dom";
 

function Habilidade() {    
        const navigate = useNavigate();

        const handleReact = () =>{
            return navigate("/React")    
        };
        const handleJavascript = () =>{
            return navigate("/Javascript")    
        };
        const handleCss3 = () =>{
            return navigate("/Css3")    
        };
        const handleHtml5 = () =>{
            return navigate("/Html5")    
        };
        const handleSql = () =>{
            return navigate("/Sql")    
        };
        const handleNode = () =>{
            return navigate("/Node")    
        };

    return(
        <>
        <Header titulo='Habilidades'/>
        <div className={StyleHabilidade.hdiv}>
            <Elementos link={handleReact} img={React} titulo="ReactJS" tituloInicio={true}/>
            <Elementos link={handleJavascript} img={Js} titulo="JavaScript" tituloInicio={true}/>
            <Elementos link={handleCss3} img={Css} titulo="CSS3" tituloInicio={true}/>
            <Elementos link={handleHtml5}img={Html} titulo="HTML5" tituloInicio={true}/>
            <Elementos link={handleSql} img={Sql} titulo="SQL" tituloInicio={true}/>
            <Elementos link={handleNode} img={Node} titulo="NodeJS" tituloInicio={true}/>
        </div>
        <VoltaHome/>
        </>
    )
}

export default Habilidade;