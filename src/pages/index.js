import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import GitHubSearch from 'components/GitHubSearch'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          repository
        }
      }
    }
  `)

  return (
    <div className="home-page">
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>

      <Link
        external
        to={`https://github.com/${data.site.siteMetadata.repository}`}
      >
        repository
      </Link>

      <h2>Try it!</h2>
      <GitHubSearch />
    </div>
  )
}

export default IndexPage
