import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, meta = [] }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet
      title={title || data.site.siteMetadata.title}
      htmlAttributes={{
        lang: `en`,
      }}
      meta={[
        {
          name: `description`,
          content: description || data.site.siteMetadata.description,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
