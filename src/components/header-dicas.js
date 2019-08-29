import React, { Component } from "react"
import '../pages/bootstrap.css'
import '../components/layout.css'
import LogoDevBranco from '../images/LogoDevBranco.png'

class HeaderDicas extends Component {
  render(){
    return (
      <div>
        <nav class=" navbar container navbar-expand-lg">
            <a class="navbar-brand" href="/">
              <img class = 'logo' 
                src = {LogoDevBranco} 
                alt = 'Logo Preto'>
              </img>
            </a>
            <button 
              class="navbar-toggler bg-dark" 
              type="button" 
              data-toggle="collapse" data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="queque collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto menu-dicas">
                <li class="nav-item">
                  <a class="nav-link text-white mx-1 py-2" href="/blog">Dicas</a>
                </li>
                <li class="nav-item">
                  <a  class="nav-link text-white mx-1" href="/videos">Vídeos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white mx-1" href="/video-tutorial">Vídeo-tutoriais</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white ml-1" href="/contato">Fale Conosco</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    )
  }
}
export default HeaderDicas