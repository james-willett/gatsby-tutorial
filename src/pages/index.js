import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { JamesButton } from "../components/Button"
import { FaApple } from "react-icons/fa"
import Info from "../components/info"
import Dude from "../components/dude"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/">
      <h1>Products page</h1>
    </Link>
    <Info />
    <Dude />
    <Link to="/images/">images</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple className="icon" />
    <JamesButton>Im from Styled</JamesButton>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">testing page</Link>
  </Layout>
)

export default IndexPage
