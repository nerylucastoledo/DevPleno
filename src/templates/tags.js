import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import HeaderDicas from '../components/header-dicas'
import Helmet from 'react-helmet'
// Components
import { graphql } from "gatsby"
  const Tags = ({ data }) => {
  return (
    <div>
        <Helmet title="Dicas Archives - DevPleno" /> 
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>
      <div>
        <div style = {{fontFamily: "Montserrat"}} class = 'imagem-dicas bg-dark text-white'>
          <HeaderDicas/>
          <div class = 'container text-center inicial'>
              <h2 class = 'texto-inicial text-white text-white my-3 font-weight-bold font-sobre-viva'
                  >BLOGS
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
                            style = {{color: '#aaa', fontFamily: 'Open sans', fontSize: '16px'}}
                            class = 'ml-3'>
                            <span role="img" aria-label="clock">⏱️️ </span>
                            {node.frontmatter.date}
                          </time>

                          {/* AUTOR */}
                          <p style = {{color: '#aaa', fontFamily: 'Open sans', fontSize: '16px'}} class = ' ml-3 mr-1'
                            >por: {node.frontmatter.author}
                          </p>
                        </div> 
                        {/* TAGS */}
                          <a style ={{color: '#bbb'}} 
                            class =  'ml-3 mr-1' 
                            href = {node.frontmatter.tags}>
                            Categoria: {node.frontmatter.tags}
                          </a>

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
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
            fields {
                slug
            }
          frontmatter {
            title
            tags
            date
            author
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