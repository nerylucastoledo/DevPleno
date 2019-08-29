import React from "react"
import { Link, graphql } from "gatsby"

import { kebabCase } from 'lodash'
import { DiscussionEmbed } from "disqus-react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderDicas from "../components/header-dicas";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const disqusShortname = "DevPleno";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    return (
      <div>
        <SEO title={post.frontmatter.title}/>
        <script id="dsq-count-scr" src="//devpleno-1.disqus.com/count.js" async></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>

        <div style = {{fontFamily: "Montserrat"}} class = 'imagem-dicas bg-dark text-white'>
          <HeaderDicas/>
          <div class = 'container text-center inicial pb-5'>
              <h2 style ={{textTransform: 'uppercase'}} class = 'texto-inicial text-white text-white my-3 font-weight-bold font-sobre-viva'
                  >
                  {post.frontmatter.title}
              </h2>
              <p class = 'pb-4 excerpt'>{post.excerpt}</p>
          </div>
        </div>

        <Layout>
          <div style = {{fontFamily: 'Open Sans', fontSize: '14px'}}>

            {/* TITULO */}
            <h1 class = 'font-weight-bold mb-4 titulo-blog'
              >{post.frontmatter.title}
            </h1>
            <hr/>

            <div style ={{color: '#bbb'}} class = 'row'>

              {/* DATA */}
              <time 
                class = 'ml-3'>{post.frontmatter.date}
              </time>

              {/* AUTOR */}
              <p style = {{color: '#aaa'}} class = ' ml-3 mr-1'
                >por: {post.frontmatter.author}
              </p>

              {/* TAGS */}
              <a style ={{color: '#bbb'}} 
                class =  'ml-3 mr-1' 
                href = {post.frontmatter.tags}>
                Categoria: {post.frontmatter.tags}
              </a>
            </div>

            {/* IMAGEM */}
            <img src={post.frontmatter.thumbnail.childImageSharp.fluid.src} alt = 'Thumbnail'/>

            {/* HTML */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} /></div>

            {/* TAGS */}
            {post.frontmatter.tags ? (
              <div className="tags-container">
                <div class = 'row'>
                  <p class = 'ml-3' style = {{color: '#bbb'}}>Em: </p>
                  {post.frontmatter.tags.map(tag => (
                    <p key={tag + `tag`} class = 'ml-3'>
                        <span>
                            <Link
                                style = {{color: '#d1440c', fontSize: '14px'}} 
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
            <hr/>
            <div class = 'mt-5'>
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
            </div>
        </Layout>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    html
    frontmatter {
      title
      date
      author
      tags
      keywords
      thumbnail {
        childImageSharp {
            fluid {
            src
          }
        }
      }
    }
    excerpt(pruneLength: 325)
  }
}
`