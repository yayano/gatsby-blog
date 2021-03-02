import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={["gatsby", "application", "react"]} />
    <h1>home page</h1>
  </Layout>
)

export default IndexPage
