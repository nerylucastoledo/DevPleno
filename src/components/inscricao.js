import React from 'react'

const Inscricao = () => {
    return (
        <section style = {{background: '#06a0e2'}}>
           <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>
          <div class = 'container sobe'>
            <div class = 'row'>

              <div class = 'col-lg-9 text-white mt-4 mb-2'>
                <h2 class = 'font-weight-bold text-white text-dev'>Hands-on ReactJS - Workshop Gratuito</h2>
                <p class = 'text-primeiros-passos' >Seus primeiros passos em ReactJS. Inscreva-se agora mesmo!</p>
              </div>

              <div class = 'col-lg-3 my-3 align-self-center centro'>
                <a href = 'https://www.devpleno.com/devreactjs/' 
                  style = {{
                    background: '#d1440c', 
                    fontSize: '16px',
                    paddingLeft: '40px', 
                    paddingRight: '40px'
                  }} 
                  class = 'garantir-vaga btn py-2 text-white font-weight-bold'
                  >QUERO PARTICIPAR
                </a>
              </div>
              
            </div>
          </div>
        </section>
    )
}
export default Inscricao