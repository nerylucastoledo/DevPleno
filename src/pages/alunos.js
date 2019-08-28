import React from 'react'
import HeaderBranco from '../components/header-branco';
import './style.css'
import handsREACT2 from '../images/handsREACT2.png'
import DEVREACTJS from '../images/DEVREACTJS.png'
import FSM from '../images/FSM.png'
import FSA from '../images/FSA.png'
import Helmet from 'react-helmet'

const Alunos = () => {
    return (
        <div>
            <Helmet title="Área do Aluno - DevPleno" /> 
            <HeaderBranco/>
            <div class = 'py-5' style = {{background: '#71c100'}}>
                <div class = 'container text-center py-5'>
                    <h1 class = 'text-white font-weight-bold font-sobre font-sobre-viva'>
                        Área do Aluno
                    </h1>
                </div>
            </div>

            <section>
                <div class = 'container mt-5'>
                    <div class = 'row text-center'>

                        {/* HANDS-ON REACTJS */}
                        <div class = 'col-lg-3 col-md-6 py-5'>
                            <img class = 'img-fluid' 
                                src = {handsREACT2} 
                                alt = 'ReactJS Hands-on'/>
                            <a style = {{textDecoration: 'none', fontSize: '18px'}} 
                                href = 'https://handsonreactjsedicaomercadodev.club.hotmart.com/login' 
                                class = 'botao-curso btn-curso py-2 px-4 mt-3'>
                                ACESSAR AS AULAS</a>
                        </div>

                        {/* DEVREACTJS */}
                        <div class = 'col-lg-3 col-md-6 py-5'>
                            <img class = 'img-fluid' 
                                src = {DEVREACTJS} 
                                alt = 'DevReactJS'/>
                            <a style = {{textDecoration: 'none', fontSize: '18px'}} 
                                href = 'https://handsonreactjsedicaomercadodev.club.hotmart.com/login' 
                                class = 'botao-curso btn-curso py-2 px-4 mt-3'>
                                ACESSAR AS AULAS</a>
                        </div>

                        {/* FULLSTACK MASTER */}
                        <div class = 'col-lg-3 col-md-6 py-5'>
                            <img class = 'img-fluid' 
                                src = {FSM} 
                                alt = 'Fullstack Master'/>
                            <a style = {{textDecoration: 'none', fontSize: '18px'}} 
                                href = 'https://handsonreactjsedicaomercadodev.club.hotmart.com/login' 
                                class = 'botao-curso btn-curso py-2 px-4 mt-3'>
                                ACESSAR AS AULAS</a>
                        </div>

                        {/* FULLSTACK ACADEMY */}
                        <div class = 'col-lg-3 col-md-6 py-5'>
                            <img class = 'img-fluid' 
                                src = {FSA} 
                                alt = 'Fullstack Academy'/>
                            <a style = {{textDecoration: 'none', fontSize: '18px'}} 
                                href = 'https://handsonreactjsedicaomercadodev.club.hotmart.com/login' 
                                class = 'botao-curso btn-curso py-2 px-3 mt-3'>
                                VALIDAR CERTIFICADO</a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Alunos   