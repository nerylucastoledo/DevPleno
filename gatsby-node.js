const path = require(`path`)
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve("src/templates/tags.js")
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  // Criação da quantidade de paginas.
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"), 
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/videos` : `/videos/${i + 1}`,
      component: path.resolve("./src/templates/videos-list-template.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Videos"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/video-tutorial` : `/video-tutorial/${i + 1}`,
      component: path.resolve("./src/templates/videotutorial-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Video-Tutorial"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/carreira` : `/carreira/${i + 1}`,
      component: path.resolve("./src/templates/carreira-list-templates.js"), 
      context: {
        filter: {frontmatter: {keywords: {eq: "carreira"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/algoritmos` : `/algoritmos/${i + 1}`,
      component: path.resolve("./src/templates/algoritmos-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Algoritmos"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/devpleno` : `/devpleno/${i + 1}`,
      component: path.resolve("./src/templates/devpleno-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "DevPleno"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/dicas` : `/dicas/${i + 1}`,
      component: path.resolve("./src/templates/dicas-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Dicas"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/dicas-de-estudo` : `/dicas-de-estudo/${i + 1}`,
      component: path.resolve("./src/templates/dicas-estudos-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Dicas de Estudo"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/entrevistas` : `/entrevistas/${i + 1}`,
      component: path.resolve("./src/templates/entrevistas-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Entrevistas"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/hands-on` : `/hands-on/${i + 1}`,
      component: path.resolve("./src/templates/handson-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Hands-On"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/java-script` : `/java-script/${i + 1}`,
      component: path.resolve("./src/templates/javascript-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "JavaScript"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/maratona-de-programacao` : `/maratona-de-programacao/${i + 1}`,
      component: path.resolve("./src/templates/maratona-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "JavaScript"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/tecnologia` : `/tecnologia/${i + 1}`,
      component: path.resolve("./src/templates/tecnologia-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Tecnologia"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/node-js` : `/node-js/${i + 1}`,
      component: path.resolve("./src/templates/nodejs-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "NodeJS"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/react` : `/react/${i + 1}`,
      component: path.resolve("./src/templates/reactjs-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "React"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/socket` : `/socket/${i + 1}`,
      component: path.resolve("./src/templates/socket-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Socket"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/web-basics` : `/web-basics/${i + 1}`,
      component: path.resolve("./src/templates/web-list-templates.js"), 
      context: {
        filter: {frontmatter: {tags: {eq: "Web-list"}}},
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  // Criação das paginas do Blog.
  posts.forEach((post, index, node) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}