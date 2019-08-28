import React from 'react'
import NavBar from './navBar';

const HeaderInicial = () => {
    return (
        <div class = 'text-white'>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>

            <div class = 'image-primeira text-white'>
              <NavBar/>

              <div class = 'container text-center inicial'>
                <p style = {{fontFamily: 'Montserrat'}} class = 'texto-inicial text-white mt-2'><strong>Conhecimento Premium </strong> 
                  para você, desenvolvedor, fazer a diferença no mercado, criar 
                  <strong> projetos de resultado </strong> 
                  <br/> e ser 
                  <strong> muito bem remunerado </strong> 
                  por isso.
                </p>
              </div>
              
            </div>
        </div>
    )
}
export default HeaderInicial