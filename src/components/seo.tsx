import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


interface Props {
  title?: string
  lang?: string
  description?: string
  meta?: any[]
}

const SEO: FC<Props> = ({
  children,
  title,
  description,
  meta = [],
  lang = 'cs',
}) => {

  const { site } = useStaticQuery(
    graphql`
       query {
         site {
           siteMetadata {
             title
             description
             keywords
             author
           }
         }
       }
     `
  )

  const metaDescription: string = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {children}
    </Helmet>
  )
}

export default SEO
