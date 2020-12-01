import Link from 'components/Link'
import GitHubUser from 'components/GitHubUser'

const IndexPage = () => {

  return (
    <div className="home-page">
      <h1>Gatsby Advanced Boilerplate</h1>
      <Link
        external
        to="https://github.com/maplessmann/gatsby-advanced-boilerplate"
      >
        repository
      </Link>

      <h2>GitHub User</h2>
      <GitHubUser />
    </div>
  )
}

export default IndexPage
