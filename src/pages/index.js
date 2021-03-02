import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={["gatsby", "application", "react"]} />
    <h1>home page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                path={node.frontmatter.path}
                body={node.frontmatter.body}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)
const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage
