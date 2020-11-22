import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = () => {
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
      title={data.site.siteMetadata.title}
      htmlAttributes={{
        lang: `en`,
      }}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
      ]}
    />
  )
}

export default SEO