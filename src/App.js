import './App.css';
import Contatos from './Components/Contatos/Contatos';
import Habilidade from './Components/Habilidades/Habilidade';
import Home from './Components/Home/Home';
import MeusProjetos from './Components/MeusProjetos/MeusProjetos';
import SobreMim from './Components/SobreMim/SobreMim';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from './Components/informacoes/react/React';
import JavaScript from './Components/informacoes/javascrip/Javascript';
import Css3 from './Components/informacoes/Css3/Css3';
import Html5 from './Components/informacoes/Html5/Html5';
import Sql from './Components/informacoes/Sql/Sql';
import Node from './Components/informacoes/Node/Node';


const rotas = createBrowserRouter([
  {
    path: "/", //URL criada
    element: <Home/> //componente usado nessa rota
  },
  {
    path: "sobremim",
    element: <SobreMim/>
  },
  {
    path: "habilidade",
    element: <Habilidade/>
  },
  {
    path: "contatos",
    element: <Contatos/>
  },
  {
    path: "meusprojetos",
    element: <MeusProjetos/>
  },
  {
    path: "/React",
    element: <React/>
  },
  
  {
    path: "/Javascript",
    element: <JavaScript/>
  },
  {
    path: "/Css3",
   element: <Css3/>
  },
  {
    path: "/Html5",
    element: <Html5/>
   
  },
  {
    path: "/Sql",
    element: <Sql/>
   
  },
  {
    path: "/Node",
    element: <Node/>
   
  },

])

function App() {
  return (
    <>
      <RouterProvider router={rotas}/>
    </>
  );
}

export default App;
