import {FC} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import className from 'classnames'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage:FC = () => {
  const linkCss = className(
    'underline hover:no-underline'
  )

return (
  <Layout>
    <SEO title="Home" />
  </Layout>
)
}
export default IndexPage
