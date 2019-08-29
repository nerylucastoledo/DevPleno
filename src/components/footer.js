import React from 'react'

const Footer = () => {
    return (
        <footer style = {{background: '#0f0f0f', fontFamily: 'Montserrat'}}>

            <div class = 'container'>
                <div class = 'row py-5 mt-3'>

                    {/* DEVPLENO */}
                    <div class = 'col-md-4'>
                        <h4 class = 'text-white pb-2 font-weight-bold titulo-footer'>DEVPLENO</h4>

                        <ul style = {{fontSize: '14px'}} class = 'list-unstyled'>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/contato'>Contato</a></li>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/aviso-legal'>Aviso Legal</a></li>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/politicas-de-privacidade'>Politica de Privacidade</a></li>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/termos-de-uso'>Termos de Uso</a></li>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/videos'>Vídeos</a></li>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/video-tutorial'>Video-tutorial</a></li>
                            <li class = 'pb-1'><a class = 'footer-a' href = '/blog'>Dicas</a></li>
                        </ul>
                        
                    </div>

                    {/* CONTATO */}
                    <div class = 'col-md-4'>
                        <h4 class = 'text-white pb-2 font-weight-bold titulo-footer'>CONTATO</h4>

                        <ul style = {{fontSize: '14px', marginLeft: '0px'}} 
                            class = 'list-unstyled text-secondary footer-a'>
                            <li>Rua Maria das Dores Barbosa, 59/1 <br/> Pouso Alegre / MG</li>
                            <li>35 9.9951-6658</li>
                        </ul>

                    </div>

                    {/* FIQUE LIGADO */}
                    <div class = 'col-md-3'>
                        <h4 class = 'text-white pb-2 font-weight-bold titulo-footer'>FIQUE LIGADO</h4>

                        <form>
                            <div class="form-group">
                                <h3 class = 'text-white Fique'>Fique por dentro de tudo que acontece na área</h3>
                                <label for="exampleInputEmail1" 
                                    style = {{fontSize: '13px'}} 
                                    class = 'text-white mt-3 mb-3'
                                    >Cadastre seu melhor e-mail abaixo!
                                </label>
                                <input style = {{fontSize: '14px'}} 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Digite seu E-mail">
                                </input>
                            </div>
                            <button style = 
                                {{
                                    background: '#2f2f2f', 
                                    fontFamily: 'Arial', 
                                    fontSize: '14px'
                                }}  
                                    type="submit" 
                                    class="btn py-2 text-white">Cadastrar
                            </button>
                        </form>

                    </div>
                </div>
            </div>

                {/* COPYRIGTH */}
            <div style = {{background: '#222222'}}>
                <div class = 'container text-secondary py-2'>
                    <div class = 'row text-center' style = {{fontSize: '13px'}}>
                        <div class = 'col-xl-4 mt-3'>
                            <p>Copyright © 2019 DevPleno. All Rights Reserved.</p>
                        </div>
                        <div class = 'col-xl-5'>
                        </div>
                        <div class = 'container col-xl-3 mt-2'>
                            <p>DevPleno é um produto We Dev Ideas</p>
                            <p style = {{marginTop: '-10px'}}>CNPJ: 06.189.599/0001-30</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer