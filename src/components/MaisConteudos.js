import React from 'react'
import Facebook from '../images/facebookBranco.png'
import Instagram from '../images/Instagram.png'
import Youtube from '../images/YoutubeIcon.png'
import Twiter from '../images/Twitter.png'

const MaisConteudos = () => {
    return (
        <section class = 'text-center text-white py-5' style = {{background: "#000"}}>
          <h2 class = 'pb-5 h2-titulos font-weight-bold text-white Titulo-inicial'>Mais Conteúdos</h2>
          <div class = 'pb-3'>

              {/* YOUTUBE */}
            <a href = 'https://www.youtube.com/devplenocom' target = 'blank'>
              <img style = {{height: '45px', width: '50px'}} 
                alt = 'Youtube DevPleno' 
                class = 'mr-4' 
                src = {Youtube}/>
            </a>

              {/* FACEBOOK */}
            <a href = 'https://www.facebook.com/devpleno/' target = 'blank' >
              <img style = {{height: '25px', width: '25px'}} 
                alt = 'Facebook DevPleno' 
                class = 'mr-4' 
                src = {Facebook}/>
            </a>

              {/* INSTAGRAM */}
            <a href = 'https://www.instagram.com/devpleno/' target = 'blank'>
              <img style = {{height: '40px', width: '55px'}} 
                alt = 'Instagram DevPleno' 
                class = 'mr-4' 
                src = {Instagram}/>
            </a>

              {/* TWITTER */}
            <a href = 'https://twitter.com/devpleno' target = 'blank'>
              <img style = {{height: '25px', width: '30px'}} 
                alt = 'Twitter DevPleno' 
                class = 'mr-4' 
                src = {Twiter} />
            </a>

          </div>
        </section>
    )
}
export default MaisConteudos