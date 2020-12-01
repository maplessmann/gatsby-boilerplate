import Link from 'components/Link'
import useGitHubUser from 'hooks/useGitHubUser'
import './index.scss'

const GitHubUser = () => {
  const { userData } = useGitHubUser()

  return (
    <Link className="github-user" href={userData.html_url} external>
      <header className="header">
        <img className="avatar" src={userData.avatar_url} alt="GitHub avatar" />
        <div className="names">
          <span className="name">{userData.name}</span>
          <span className="login">@{userData.login}</span>
        </div>
      </header>
      <p className="bio">{userData.bio}</p>
    </Link>
  )
}

export default GitHubUser
