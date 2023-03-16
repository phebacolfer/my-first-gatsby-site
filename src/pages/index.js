import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../pages/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A small bundle of pink flowers surrounded by green leaves and flower buds"
        src="../images/flowers.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage