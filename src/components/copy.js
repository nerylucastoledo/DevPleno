import React from 'react'
import './layout.css'

const Copy = () => {
    return (
        <section class = 'text-center py-4'>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>

            <p 
                style = {{fontFamily: 'Montserrat', fontSize: ' 14px'}} 
                class = 'text-secondary'
                >Copyright © 2019 Devpleno. Todos os direitos reservados. 
                Um produto We Dev Ideas / CNPJ: 06.189.599/0001-30
            </p>
            <a class = 'pr-4 politica' href = '/politicas-de-privacidade'>Política de Privacidade</a>
            <a class = 'pr-4 politica' href = '/termos-de-uso'>Termos de Uso</a>
            <a class = 'pr-4 politica' href = '/aviso-legal'>Aviso Legal</a>
            
        </section>
    )
}
export default Copy