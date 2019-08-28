import React from 'react'
import HeaderBranco from '../components/header-branco';
import '../components/layout.css'
import Copy from '../components/copy';
import tulio from '../images/tulio.png'
import Helmet from 'react-helmet'

const Sobre = () => {
    return (
        <div>
            <Helmet title="Sobre - DevPleno" /> 
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
            <HeaderBranco/>

            <div class = 'py-5 viva'>
                <div class = 'container text-white text-center py-5'>
                <h1 class = 'font-weight-bold font-sobre font-sobre-viva'>
                    Viva a vida dos seus sonhos sendo um desenvolvedor pleno
                </h1>
                </div>
            </div> 

            <div class = 'text-secondary container' style = {{fontFamily: 'Montserrat'}}>
                <ul class = 'pt-5 letra-sobre'>
                    <li class = 'pb-3 ml-3'>Como posso ser um profissional melhor?</li>
                    <li class = 'pb-3 ml-3'>Como aprender as tecnologias que fazem a diferença na carreira?</li>
                    <li class = 'pb-3 ml-3'>Como posso ser cada vez mais valorizado como desenvolvedor?</li>
                    <li class = 'pb-3 ml-3'>Como viver de desenvolvimento de software mesmo morando no interior?</li>
                    <li class = 'pb-3 ml-3'>Como entregar projetos de qualidade que realmente geram resultado?</li>
                </ul>

                <h4 style = {{color: '#696969', fontFamily: 'Montserrat', fontSize: '23px'}}>Se você já se fez pelo menos uma 
                    dessas perguntas, você está no lugar certo!
                </h4>

                <p class = 'py-3 letra-sobre'>Atualmente o desenvolvedor é uma peça chave em 
                    todos os modelos de negócios, já que toda empresa é dependente de software em 
                    algum ponto de suas atividades.
                </p>

                <p class = 'letra-sobre'>
                    Porém, ensino convencional ainda não consegue preparar um desenvolvedor 100% 
                    para o mercado de trabalho (seja para trabalhar em outras empresas ou abrir o 
                    seu próprio negócio). Ainda faltam alguns pontos importantes para a formação 
                    ser completa:
                </p>

                <ul class = 'pt-3 letra-sobre'>
                    <li class = 'pb-3 ml-3'>Conhecimento e prática em tecnologias de mercado;</li>
                    <li class = 'pb-3 ml-3'>Uso de processos que ajudam a entregar mais qualidade e resultados;</li>
                    <li class = 'pb-3 ml-3'>Conhecimento de mercado para alavancar a carreira e projetos.</li>
                </ul>

                <h4 style = {{color: '#696969', fontFamily: 'Montserrat', fontSize: '23px'}}>O DevPleno surgiu justamente para 
                    suprir essas necessidades e ajudar você a alcançar seus objetivos profissionais 
                    e viver a vida dos seus sonhos como desenvolvedor.
                </h4>
                
                <p class = 'py-3 letra-sobre'>Aqui você encontra conteúdos de qualidade sobre as tecnologias que estão em 
                    alta e dicas profissionais que vão te tornar cada vez mais preparado para o 
                    mercado.
                </p>

                <p class = 'letra-sobre pb-5'>Além dos artigos do blog e dos minicursos gratuitos, você também pode ir 
                    além e acelerar a sua caminhada com os nossos cursos premium, que já 
                    transformaram a carreira e a vida de centenas de desenvolvedores. 
                </p>
            </div>

            <section style = {{background: '#000'}} class = 'py-3'>
                <div class = 'container'>
                    <div class = 'row'>

                        {/* FALA TULIO */}
                        <div class = 'col-lg-6 col-md-6 col-12 pt-5'>
                            <p  class = 'pt-5 sobreTulio'>
                                <em>
                                    "Meu objetivo é trazer muito conteúdo 
                                    relevante e mostrar realmente como é o dia a 
                                    dia de um desenvolvedor de software. 
                                    Atualmente eu tenho a minha própria empresa e 
                                    também atuo em grandes projetos no exterior por 
                                    meio da Toptal, então espere muitos insights 
                                    direto do de batalha!"
                                </em>
                            </p>
                            {/* NOME TULIO */}
                            <h2 style = {{fontFamily: 'sans-serif'}} class = 'h5 text-white criador'>
                                TULIO FARIA - CRIADOR DO DEVPLENO
                            </h2>

                        </div>
                        
                        {/* IMAGEM TULIO */}
                        <div class = 'col-lg-6 col-md-6 col-12'>
                            <img class = 'img-fluid foto' 
                                src = {tulio} 
                                Alt = 'Tulio Faria'>
                            </img>
                        </div>
                    </div>
                </div>
            </section>
            <Copy/>
        </div>
    )
}
export default Sobre