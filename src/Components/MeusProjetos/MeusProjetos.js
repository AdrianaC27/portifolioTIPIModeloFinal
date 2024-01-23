import BoxTexto from '../BoxTexto/BoxTexto';
import Header from '../Header/Header';
import VoltaHome from '../VoltaHome/VoltaHome';
import StyleMeusProjetos from './MeusProjetos.module.css';

function MeusProjetos() {
    return(
        <>
        <Header titulo="Meus Projetos"/>
        <div className={StyleMeusProjetos.divBox}>
            <BoxTexto titulo="QuantumQuidditch" texto="
                    Juntei-me à Liga de Quadribol
                    Quântico para transformar o esporte
                    mais emocionante do mundo bruxo
                    em uma experiência virtual inovadora.
                    O QuantumQuidditch é um projeto
                    que combina a adrenalina do
                    Quadribol com elementos de
                    realidade virtual e aumentada.
                    Prepare-se para montar sua vassoura
                    digital, lançar feitiços em 3D e
                    competir em partidas emocionantes,
                    tudo do conforto do seu computador.
                    Vamos levar o Quadribol a novos
                    patamares!"
            />
            <BoxTexto titulo="PotionCraft" texto="
                O PotionCraft é um assistente digital
                que torna a arte de criar poções
                mágicas mais acessível a todos os
                bruxos e bruxas. Com uma extensa
                biblioteca de receitas, guias
                interativos e sugestões
                personalizadas com base nas
                preferências do usuário, este projeto
                visa simplificar a prática de preparar
                poções. Deixe-me guiar você através
                do fascinante mundo das misturas
                mágicas, onde cada linha de código é
                um ingrediente para o sucesso
                alquímico!"
            />
            <BoxTexto titulo="CodeHogwarts" texto="
                Na CodeHogwarts, estou trabalhando
                para levar a magia da programação
                para todos os bruxos e bruxas. Este
                projeto é uma escola de magia virtual
                onde os estudantes podem aprender e
                aprimorar suas habilidades em
                desenvolvimento web, feitiços de
                codificação e encantamentos de
                programação. Com cursos interativos
                e desafios mágicos, estamos
                formando a próxima geração de
                desenvolvedores bruxos!
            "
            />
        </div>
        <VoltaHome/>
        </>
    )
}

export default MeusProjetos;