import React from 'react'
import '../components/layout.css'
import HeaderDicas from '../components/header-dicas';
import SideBar from '../components/sidebar';
import Footer from '../components/footer';
import Helmet from 'react-helmet'

const VideoTutorial = () => {
    return (
        <div>
            <Helmet title="Contato - DevPleno" />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>
           <div>
                <div class = 'imagem-videosCont text-white'>
                    <HeaderDicas/>
                    <div class = 'container text-center inicial'>
                        <h2 class = 'texto-inicial font-weight-bold text-white my-5'>
                            CONTATOS
                        </h2>
                    </div>
                </div>
            </div>

            <section class = 'py-5'>
                <div class = 'container'>
                    <div class = 'row'>

                        <div class="col-xl-8 col-12">
                            <ul style = {{fontSize: '15px'}} class = 'list-unstyled'>
                                <li class = 'text-secondary mb-3'>
                                    <strong class = 'text-dark'>E-mail: </strong>
                                    tuliofaria@devpleno.com
                                </li>

                                <li class = 'text-secondary'>
                                    <strong class = 'text-dark'>WhatsApp: </strong>
                                    (35) 999 090 011
                                </li>
                            </ul>
                        </div>  

                        <div class = 'col-xl-4 col-12'>
                            <SideBar/>
                        </div>

                    </div>
                </div>
            </section>

            <div>
                <Footer/>
            </div>

        </div>
    )
}
export default VideoTutorial