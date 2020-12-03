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
      <Link
        external
        to={`https://github.com/${data.site.siteMetadata.repository}`}
      >
        <h1 className="title">{data.site.siteMetadata.title}</h1>
      </Link>
      <GitHubSearch />
    </div>
  )
}

export default IndexPage
