import MINICURSOREACT from '../images/MINICURSOREACT.png'
import SOCKET2 from '../images/SOCKET2.png'
import DEVREACTJS1 from '../images/DEVREACTJS1.png'
import FSM2 from '../images/FSM2.png'

import React from "react"

const Cursos = () => {
    return (
        <section style = {{background: 'rgba(242,242,242,0.8)'}} class = 'py-5'>
            
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>

            <div class = 'container text-center pb-3'>
                <h2 class = 'Titulo-inicial h2-titulos'>Nossos Cursos</h2>
            </div>

            {/* CURSOS */}
            <div style = {{fontSize: '16px'}} class = 'container bg-white galeria letra-curso'>
                <div class = 'row' style = {{color: '#444444'}}>
    
                    {/* Minicurso de ReactJS */}
                    <div class = 'borda col-xl-3 col-md-6 text-center py-4 text-secondary'>
                        <a href = 'https://www.devpleno.com/serie-reactjs/'>
                        <img src = {MINICURSOREACT} alt = 'Curso Reactjs Gratutio' class="img-thumbnail img-curso">
                        </img>
                        </a>
                        <h3 class = 'py-3 titulo-curso'>Minicurso de ReactJS</h3>
                        <p class = ''>Neste minicurso, nós vamos construir juntos um App Web para você gerenciar as 
                            suas séries favoritas da Netflix utilizando o ReactJS.
                        </p>
                        <a style = {{textDecoration: 'none'}} href = 'https://www.devpleno.com/serie-reactjs/' class = 'btn-curso mt-2 botao-curso'>
                            ACESSO GRATUITO
                        </a>
                    </div>
        
                        {/* Minicurso de Socket.IO */}
                    <div class = 'borda col-xl-3 col-md-6 text-center py-4 text-secondary'>
                        <a href = 'https://www.devpleno.com/serie-reactjs/'>
                        <img class = 'img-thumbnail' src = {SOCKET2} alt = 'Minicurso Socket.io'>
                        </img>
                        </a>
                        <h3 class = 'titulo-curso py-3'>Minicurso de Socket.IO</h3>
                        <p class = 'text-secondary'>Neste minicurso, vamos <br/>construir juntos uma 
                            aplicação com comunicação em tempo <br/> real utilizando NodeJS e WebSockets.
                        </p>
                        <a style = {{textDecoration: 'none'}} href = 'https://www.devpleno.com/serie-reactjs/' class = 'btn-curso mt-2 botao-curso'>
                            ACESSO GRATUITO
                        </a>
                    </div>

                            {/* DevReactJS */}
                    <div class = ' borda col-xl-3 col-md-6 text-center py-4 text-secondary'>
                        <a href = 'https://www.devpleno.com/serie-reactjs/'>
                        <img src = {DEVREACTJS1} alt = 'DevReactJS' class="img-thumbnail">
                        </img>
                        </a>
                        <h3 class = 'titulo-curso py-3'>DevReactJS</h3>
                        <p class = 'text-secondary'>Construa aplicações <br/>profissionais com ReactJS 
                            utilizando o processo aplicado em grandes empresas nacionais e estrangeiras.
                        </p>
                        <a style = {{textDecoration: 'none'}} href = 'https://www.devpleno.com/serie-reactjs/' class = 'btn-curso mt-2 botao-curso'>
                            SAIBA MAIS
                        </a>
                    </div>
        
                            {/* Fullstack Master */}
                    <div class = 'borda col-xl-3 col-md-6 text-center py-4 text-secondary'>
                        <a href = 'https://www.devpleno.com/serie-reactjs/'>
                        <img src = {FSM2} alt = 'Fullstack Master' class="img-thumbnail">
                        </img>
                        </a>
                        <h3 class = 'titulo-curso py-3'>Fullstack Master</h3>
                        <p class = 'text-secondary'>Descubra como entregar aplicações completas e se 
                            tornar um fullstack developer em apenas 3 meses (mesmo sem experiência na área). 
                        </p>
                        <a style = {{textDecoration: 'none'}} href = 'https://www.devpleno.com/serie-reactjs/' class = 'btn-curso mt-2 botao-curso'>
                            SAIBA MAIS 
                        </a>
                    </div>
    
                </div>
            </div>
        </section>
    )
}
export default Cursos