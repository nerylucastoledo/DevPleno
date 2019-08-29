import Copy from '../components/copy'
import Helmet from 'react-helmet'
import React from "react"
import { Link, graphql } from "gatsby"

import '../components/layout.css'
import Cursos from "../components/cursos";
import MaisConteudos from "../components/MaisConteudos";
import Inscricao from "../components/inscricao";
import Contato from "../components/contato";
import HeaderInicial from "../components/headerInicial";

export default ({ data }) => {
    return (
      <div>
        <Helmet title="DevPleno - Conhecimento Premium" />  
          <HeaderInicial/>
          <Inscricao/>
          <Cursos/>

          {/* BLOG */}
    
          <section class = 'pt-5 pb-2'>
            <div class = 'container text-center'>
              <h2 class = 'h2-titulos Titulo-inicial'>Últimas do blog</h2>
            </div>
          </section>
    
          <section class = 'container mb-5'>
            <div class="row">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>

                    <div class = 'col-12 py-4'>

                      {/* IMAGEM */}
                      <Link to={node.fields.slug}>
                          <img class = 'imagem-blog' 
                            src={node.frontmatter.thumbnail.childImageSharp.fluid.src} 
                            alt = 'Thumbnail'
                          />
                      </Link>
                      
                      {/* TITULO */}
                      <p href={node.fields.slug}>

                        <div class = 'imagem-blog'>
                          <a style = {{color: '#54595f'}} 
                            class = 'text-decoration-none' 
                            href = {node.fields.slug}>

                            <p style = {{fontFamily: "Sans-serif, Montserrat", fontSize: '18px'}} 
                              class = 'font-weight-bold'>
                              {node.frontmatter.title}{" "}
                            </p>

                          </a>
                        </div>

                      </p> 

                       {/* LEIA MAIS */}
                      <Link style = 
                          {{
                            color: '#61ce70', 
                            fontSize: '12px', 
                            textDecoration: 'none'
                          }} 
                          to={node.fields.slug}>LEIA MAIS
                      </Link>

                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MaisConteudos/>
          <Contato/>
          <Copy/>
      </div>
    )
}
export const query = graphql`
query {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 6) {
    edges {
      node {
        frontmatter {
          title
          thumbnail {
            childImageSharp {
                fluid {
                src
              }
            }
          }
        }
          fields {
            slug
          }
          excerpt(pruneLength:70)
        }
        }
    }
}
`