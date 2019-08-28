import React from 'react'

const SideBar = () => {
    return (
        <section>
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>
            <div class = 'container'>
                <div class = 'row'>
                    <div class = 'col-12 col-md-12'>
                    <h2 class = 'pt-5 text-center DesingCat'>Categorias</h2>
                        <ul class = 'list-unstyled text-white font-weight-bold'>
                            <div class = 'side-bar mt-2 pt-4 imagem-dicas'><li><a class = 'text-white imagem-dicas' href = '/dicas'>DICAS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-Cinzas'><li><a class = 'text-white' href = '/tecnologia'>TECNOLOGIA</a></li></div>
                            <div class = 'side-bar mt-2 pt-4 imagem-videos'><li><a class = 'text-white' href = '/videos'>VIDEOS</a></li></div>
                            <div class = 'side-bar mt-2 pt-4 imagem-videosTuto'><li><a class = 'text-white' href = '/video-tutorial'>VIDEO-TUTORIAL</a></li></div>
                        </ul>
                        <h2 class = 'pt-4 text-center DesingTemas'>Temas</h2>
                        <ul class = 'list-unstyled text-white font-weight-bold'>
                        <div class = 'side-bar mt-2 pt-4 imagem-verde'><li><a class = 'text-white' href = '/algoritmos/'>ALGORITMOS</a></li></div>
                        <div class = 'side-bar pt-4 mt-2 imagem-carrer'><li><a class = 'text-white' href = '/'>CARREIRA</a></li></div>
                        <div class = 'side-bar pt-4 mt-2 imagem-windows'><li><a class = 'text-white' href = '/'>DEV NO WINDOWS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-Cinzas'><li><a class = 'text-white' href = '/'>DEVPLENO</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-dicas'><li><a class = 'text-white' href = '/'>DICA</a></li></div>
                            <div class = 'side-bar mt-2 pt-4 imagem-dicas'><li><a class = 'text-white' href = '/dicas'>DICAS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-carrer'><li><a class = 'text-white' href = '/'>DICAS DE CARREIRA</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-Cinzas'><li><a class = 'text-white' href = '/'>DICAS DE ESTUDOS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-entrevista'><li><a class = 'text-white' href = '/'>ENTREVISTAS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-handsOn'><li><a class = 'text-white' href = '/'>HANDS-ON</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-JS'><li><a class = 'text-white' href = '/'>JAVASCRIPT</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-Cinzas'><li><a class = 'text-white' href = '/'>MARATONA DE PROGRAMAÇÃO</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-NODE'><li><a class = 'text-white' href = '/'>NODEJS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-REACT'><li><a class = 'text-white' href = '/'>REACTJS</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-Cinzas'><li><a class = 'text-white' href = '/'>SOCKET.IO</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-Cinzas'><li><a class = 'text-white' href = '/'>TECNOLOGIA</a></li></div>
                            <div class = 'side-bar pt-4 mt-2 imagem-web'><li><a class = 'text-white' href = '/'>WEB-BASICS</a></li></div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SideBar