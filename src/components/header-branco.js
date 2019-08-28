import React from 'react'
import LogoDev from '../images/LogoDev.png'

const HeaderBranco = () => {
    return (
        <div class = 'py-1'>
          <nav class="nav navbar-light">
        <div class = 'container'>
          <a class="navbar-brand" href="/"><img class = 'logo image-segunda' src = {LogoDev} alt = 'Logo Preto'></img></a>

          <div class = 'float-right font-weight-bold mt-4 row'>
                <a class="nav-link" href="/sobre"><p class = 'muda'>SOBRE</p></a>
                <a class="nav-link" href="/blog"><p class = 'muda'>BLOG</p></a>
                <a class="nav-link" href="/alunos"><p class = 'muda'>ALUNOS</p></a>
          </div>
        </div>
      </nav>
        </div>
    )
}
export default HeaderBranco