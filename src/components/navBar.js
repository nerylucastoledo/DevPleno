import React from "react"
import '../pages/bootstrap.css'
import '../components/layout.css'
import LogoDevBranco from '../images/LogoDevBranco.png'

const NavBar = () => {

  return (
    <div>
      <nav class="nav navbar-light">
        <div class = 'container mt-2'>
          <a class="navbar-brand" href="/">
            <img class = 'logo image-segunda' 
              src = {LogoDevBranco} 
              alt = 'Logo Preto'>
            </img>
          </a>

          <div class = 'menu-inicial mt-3 row'>
                <a class="nav-link" href="/sobre"><p class = 'muda'>SOBRE</p></a>
                <a class="nav-link" href="/blog"><p class = 'muda'>BLOG</p></a>
                <a class="nav-link" href="/alunos"><p class = 'muda'>ALUNOS</p></a>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar