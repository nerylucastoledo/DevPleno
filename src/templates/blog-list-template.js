import React from "react"
import { Link, graphql } from "gatsby"
import HeaderDicas from "../components/header-dicas";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'

class BlogList extends React.Component{
    render(){
        const post = this.props.data
        const { numPages } = this.props.pageContext
        return (
            <div>
                <Helmet title="Dicas Archives - DevPleno" /> 
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>

                    {/* HEADER*/}
                    <div class = 'imagem-dicas text-white'>
                        <HeaderDicas/>
                        <div class = 'container text-center inicial'>
                            <h2 class = 'texto-inicial text-white text-white my-3 font-weight-bold font-sobre-viva'
                                >
                                DICAS
                            </h2>
                        </div>
                    </div>

                <div class = 'py-5'>
                    <div class = 'container'>

                        <div class = 'row'>

                            {/* LAYOUT DOS POST'S */}
                            <div class = 'col-xl-8 col-12 my-4'>
                                <div class = 'row'>
                                    {post.allMarkdownRemark.edges.map(({ node }) => (
                                        <div key={node.id}>
                                            <div class = 'mb-5 tamanho'>
                                                <div class = 'border'>

                                                    {/* IMAGE */} 
                                                    <Link to={node.fields.slug}>
                                                        <img 
                                                            class = 'imagem-blog' 
                                                            src={node.frontmatter.thumbnail.childImageSharp.fluid.src} 
                                                            alt = 'Thumbnail'
                                                        />
                                                    </Link>
                                                    
                                                    {/* TAGS */}
                                                    {node.frontmatter.tags ? (
                                                        <div className="tags-container">
                                                            <div class = 'row'>
                                                                {node.frontmatter.tags.map(tag => (
                                                                    <p key={tag + `tag`} class = 'ml-3'>
                                                                        <span class = 'ml-3'>
                                                                            <Link 
                                                                                style = {{color: '#bbb', fontSize: '14px'}} 
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

                                                    {/* TITLE */}
                                                    <Link 
                                                        to={node.fields.slug} 
                                                        style = {{color: 'inherit'}}
                                                        >
                                                        <div>
                                                            <h3 class = 'ml-3 titulo'>
                                                                {node.frontmatter.title}{" "}
                                                            </h3>
                                                        </div>
                                                    </Link>   

                                                    {/* DECRIÇÃO */}            
                                                    <div class = 'mr-3 my-3'>
                                                        <p 
                                                            style = {{fontSize: '14px'}} 
                                                            class = 'ml-3 text-secondary mb-4 fonte-p'
                                                            >
                                                            {node.excerpt}
                                                        </p>

                                                        {/* BOTÃO LEIA MAIS */}
                                                        <a 
                                                            class = 'ml-3' 
                                                            href ={node.fields.slug} 
                                                            style = {{color: '#333333', fontSize: '14px'}}
                                                            >LEIA MAIS... →
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class = "mt-5" style = {{opacity: '0.3'}}>
                                                <hr/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                                    
                            {/* SIDEBAR */}
                            <div class = 'col-xl-4 col-12'>
                                <SideBar/>
                            </div>  

                        </div>
                    </div>
                    <div class = 'container'>
                        <div class = 'row'>
                            {Array.from({ length: numPages }, (_, i) => (
                            <Link
                                style = {{textDecoration: 'none', marginLeft: '5px'}}
                                key = {`pagination-number${i + 1}`} 
                                to = {`/blog/${i === 0 ? "" : i + 1}`}
                                if 
                                >
                                <button 
                                    style = {{color: '#fff'}} 
                                    class = 'pagination'
                                    >
                                    {i + 1}
                                </button>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default BlogList

export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
            excerpt(pruneLength: 100)
            fields {
                slug
                }
          frontmatter {
            title
            tags
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