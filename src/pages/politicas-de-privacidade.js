import React from 'react'
import HeaderDicas from '../components/header-dicas';
import SideBar from '../components/sidebar';
import '../components/layout.css'
import Footer from '../components/footer';
import Helmet from 'react-helmet'

const Politica = () => {
    return (
       <div>
           <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
           
           <div>
                <Helmet title="Políticas de Privacidade - DevPleno" />
               <div class = 'image-politica'>
                    <HeaderDicas/>
                    <div class = 'container text-center texto-inicial'>
                        <h2 class = 'h1 font-sobre-viva font-weight-bold text-white'>
                            POLÍTICA DE PRIVACIDADE
                        </h2>
                    </div>
                </div>
            </div>

            <div style = {{fontFamily: 'Open Sans', fontSize: '0.9375rem'}} class = 'container'>
                <div class = 'row'>

                    <div class = 'col-xl-9 col-12'>
                        <div class = 'text-secondary container fonte-p'>
                            <p class = 'pt-5 pb-1'>Esta Política de Privacidade foi formulada com o intuito de manter a privacidade e a segurança das informações coletadas de nossos clientes e usuários.
                            </p>
                            <p class = ' text-dark'>
                            Política de privacidade para $devPleno.
                            </p>
                            <p class = 'py-3 '>Todas as suas informações pessoais 
                            recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso 
                            site o mais produtiva e agradável possível.</p>
                            <p class = ' pb-1 text-dark'>A garantia da confidencialidade 
                            dos dados pessoais dos utilizadores do nosso site é importante para 
                            o $devPleno. 
                            </p>
                            <p class = ' pb-1'>Todas as informações pessoais 
                            relativas a membros, assinantes, clientes ou visitantes que usem o 
                            $devPleno serão tratadas em concordância com a Lei da Proteção de 
                            Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p>
                            <p class = ' pb-1'>A informação pessoal recolhida 
                            pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, 
                            morada, data de nascimento e/ou outros.</p>
                            <p class = ' pb-1'>O uso do $devPleno pressupõe a 
                            aceitação deste Acordo de privacidade. A equipe do $devPleno 
                            reserva-se ao direito de alterar este acordo sem aviso prévio. Deste 
                            modo, recomendamos que consulte esta página com regularidade de forma 
                            a estar sempre atualizado.</p>
                            <p class = ' pb-1 text-dark'>Os anúncios</p>
                            <p class = ' pb-1'>Tal como outros websites, coletamos 
                            e utilizamos informação contida nos anúncios. A informação contida nos 
                            anúncios, inclui o seu endereço IP (Internet Protocol), o seu ISP 
                            (Internet Service Provider, como o Sapo, Clix, ou outro), o browser que 
                            utilizou ao visitar o nosso website (como o Internet Explorer ou o 
                            Firefox), o tempo da sua visita e que páginas visitou dentro do nosso 
                            website.</p>
                            <p class = ' pb-1 text-dark'>Os Cookies e Web Beacons</p>
                            <p class = ' pb-1'>Utilizamos cookies para armazenar 
                            informação, tais como as suas preferências pessoas quando visita o 
                            nosso website. Isto poderá incluir um simples popup, ou uma ligação 
                            em vários serviços que providenciamos, tais como fóruns.</p>
                            <p class = ' pb-1'>Em adição também utilizamos 
                            publicidade de terceiros no nosso website para suportar os custos de 
                            manutenção. Alguns destes publicitários, poderão utilizar tecnologias 
                            como os cookies e/ou web beacons quando publicitam no nosso website, o 
                            que fará com que esses publicitários (como o Google através do Google 
                            AdSense) também recebam a sua informação pessoal, como o endereço IP, o 
                            seu ISP, o seu browser, etc. Esta função é geralmente utilizada para 
                            geotargeting (mostrar publicidade de Lisboa apenas aos leitores oriundos
                            de Lisboa por ex.) ou apresentar publicidade direcionada a um tipo de 
                            utilizador (como mostrar publicidade de restaurante a um utilizador que 
                            visita sites de culinária regularmente, por ex.).</p>
                            <p class = ' pb-1'>Você detém o poder de desligar os 
                            seus cookies, nas opções do seu browser, ou efetuando alterações nas 
                            ferramentas de programas Anti-Virus, como o Norton Internet Security. 
                            No entanto, isso poderá alterar a forma como interage com o nosso website,
                            outros websites. Isso poderá afetar ou não permitir que faça logins em 
                            programas, sites ou fóruns da nossa e de outras redes.</p>
                            <p class = ' pb-1 text-dark'>Ligações a Sites de terceiros</p>
                            <p class = ' pb-1'>O $devPleno possui ligações para 
                            outros sites, os quais, a nosso ver, podem conter informações / 
                            ferramentas úteis para os nossos visitantes. A nossa política de 
                            privacidade não é aplicada a sites de terceiros, pelo que, caso 
                            visite outro site a partir do nosso deverá ler a política de 
                            privacidade do mesmo</p>
                            <p class = ' pb-1'>Não nos responsabilizamos pela 
                            política de privacidade ou conteúdo presente nesses mesmos sites.</p>
                        </div>
                    </div> 

                    <div class = 'col-xl-3 col-12'>
                        <SideBar/>    
                    </div> 
                      
                </div>
            </div> 
            <Footer/>
       </div>
    )
}
export default Politica