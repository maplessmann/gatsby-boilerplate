import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import GithubIcon from './GithubIcon'
import './index.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          repository
        }
      }
    }
  `)

  return (
    <header className="app-header">
      <div className="container">
        <h1 className="title">⚛️ {data.site.siteMetadata.title}</h1>
        <Link
          external
          to={`https://github.com/${data.site.siteMetadata.repository}`}
          aria-label="Github repository link"
        >
          <GithubIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header
