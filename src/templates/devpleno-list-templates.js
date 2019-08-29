import React from "react"
import Layout from "../components/layout"
import HeaderDicas from '../components/header-dicas'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
// Components
import { Link, graphql } from "gatsby"
  const DevPlenoList = ({ data }) => {
  return (
    <div>
        <Helmet title="DevPleno Archives - DevPleno" /> 
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>
      <div>
        <div id = 'algoritmos' style = {{fontFamily: "Montserrat"}} class = 'text-white'>
          <HeaderDicas/>
          <div class = 'container text-center inicial'>
              <h2 class = 'texto-inicial text-white text-white my-3 font-weight-bold font-sobre-viva'
                  >DEVPLENO
              </h2>
          </div>
        </div>
        <Layout>
      
          <section>
            <div className="container my-4">
              <div className="row">
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  return (
                    <div key={node.id}></div>
                      ,
                    <div style = {{fontFamily: 'Open Sans'}} className="col-12">
                      <div>       

                        {/* TITULO */}
                        <a style = {{textDecoration: '#000'}} href={node.fields.slug}>
                          <div class = "font-weight-bold mb-3 titulo-blog">      
                          {node.frontmatter.title}{""}             
                          </div>
                        </a>

                        <div className="row" style={{paddingBottom: "12px"}}>  

                          {/* DATA */}
                          <time 
                            style = {{color: '#ccc', fontFamily: 'Open sans', fontSize: '16px'}}
                            class = 'ml-3'>
                            <span role="img" aria-label="clock">⏱️️ </span>
                            {node.frontmatter.date} |
                          </time>

                          {/* AUTOR */}
                          <p style = {{color: '#bbb', fontFamily: 'Open sans', fontSize: '16px'}} class = ' ml-3 mr-1'
                            >Por: {node.frontmatter.author} |
                          </p>
                        {/* TAGS */}
                        {node.frontmatter.tags ? (
                          <div className="tags-container">
                            <div class = 'row'>
                              <p class = 'ml-4' style = {{color: '#aaa'}}>Categoria: </p>
                              {node.frontmatter.tags.map(tag => (
                                <p key={tag + `tag`} class = 'ml-3'>
                                    <span>
                                        <Link
                                            style = {{color: '#ccc', fontSize: '14px'}} 
                                            to={`/tags/${kebabCase(tag)}/`}
                                            >
                                            {tag}
                                        </Link>
                                    </span>
                                </p>
                              ))}
                              </div>
                          </div>
                        ) : null}
                      </div>
                          {/* IMAGEM */}
                          <img 
                            class = 'imagens' 
                            src={node.frontmatter.thumbnail.childImageSharp.fluid.src} 
                            alt = 'Thumbnail'
                          />             
                        
                        {/* DESCRIÇÃO */}
                        <p class="pol">{node.excerpt}</p>
                          <a href = {node.fields.slug} style = {{
                            background: '#d1440c', 
                            fontSize: '14px',
                            paddingLeft: '20px', 
                            paddingRight: '20px'
                            }} 
                            class = 'garantir-vaga btn mb-4 py-2 text-white font-weight-bold'
                            >read more > 
                        </a>
                        <hr/>
                      </div>
                    </div> 
                  )
                })}
              </div>
            </div>
          </section>

        </Layout>
      </div>
    </div>
  )
}
export default DevPlenoList
export const pageQuery = graphql`
query DevPlenoListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {frontmatter: {tags: {eq: "DevPleno"}}}
    ) {
      edges {
        node {
            excerpt(pruneLength: 250)
            fields {
                slug
                }
          frontmatter {
            title
            tags
            author
            date
            thumbnail {
                childImageSharp {
                    fluid {
                    src
                  }
                }
            }
          }
        }
      }
    }
  }
`