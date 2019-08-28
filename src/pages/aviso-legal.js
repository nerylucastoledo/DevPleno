import React from 'react'
import HeaderDicas from '../components/header-dicas';
import SideBar from '../components/sidebar';
import './bootstrap.css'
import '../components/layout.css'
import Footer from '../components/footer';
import Helmet from 'react-helmet'

const Aviso = () => {
    return (
       <div>
           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
           <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
           <Helmet title="Aviso Legal - DevPleno" />
           <div class = 'text-white'>
                <div class = 'image-politica'>
                    <HeaderDicas/>
                    <div class = 'container text-center texto-inicial'>
                        <h2 class = 'h1 font-sobre-viva font-weight-bold text-white'>AVISO LEGAL</h2>
                    </div>
                </div>
            </div>
            <div style = {{fontFamily: 'Open Sans', fontSize: '0.9375rem'}} class = 'container'>
                <div class = 'row'>

                    <div class = 'col-xl-8 col-12'>
                        <div class = 'text-secondary container fonte-p'>
                            <p class = 'pt-5'>Você deve saber que todos os produtos e materiais produzidos pela We Dev Ideas – Eirelli – ME, são feitos para fins educacionais e informacionais e por isso, a Bize não garante que você conseguirá obter quaisquer resultados ou ganhar algum dinheiro usando qualquer uma de nossas ideias, ferramentas, estratégias e recomendações, e nada em nossos Sites é uma promessa ou garantia para você de ganhos futuros.
                            </p>
                            <p>
                            VOCÊ CONCORDA QUE O USO OU INCAPACIDADE DE USO DOS PRODUTOS DA BIZE É 
                            POR SUA CONTA E RISCO. Ao adquirir um produto de nossa empresa, você 
                            aceita, concorda e entende que você é totalmente responsável por seu 
                            progresso e resultados de sua participação e que nós não oferecemos 
                            nenhuma representação, garantia ou garantias verbalmente ou por 
                            escrito sobre seus ganhos, o lucro do negócio, o desempenho do 
                            marketing, o crescimento da audiência ou resultados de qualquer tipo.
                            </p>
                            <p>Qualquer dado presente no 
                            site $devPleno ou de seus produtos, são somente ilustrativos e não 
                            devem ser considerados como um ganho comum, ganho exato ou promessa de 
                            renda no futuro.</p>
                            <p>Você é totalmente 
                            responsável pelas suas decisões, ações e resultados na vida, e 
                            através dos seus registros no site, você concorda em não nos 
                            responsabilizar por qualquer decisão, ações ou resultados a qualquer 
                            momento, em nenhuma circunstância.
                            </p>
                            <p>Quaisquer declarações 
                            descritas no nosso website, conteúdos e ofertas são simplesmente 
                            nossa opinião e, portanto, não são garantias ou promessas de 
                            desempenho real. Nós não oferecemos assessoria jurídica, médica, 
                            psicológica ou financeira profissional.</p>
                        </div>
                    </div> 
                    
                    <div class = 'col-xl-4 col-12'>
                        <SideBar/>    
                    </div>   
                </div>
            </div> 
            <Footer/>
       </div>
    )
}
export default Aviso