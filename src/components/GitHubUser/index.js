import Link from 'components/Link'
import useGitHubUser from 'hooks/useGitHubUser'
import './index.scss'

const GitHubUser = () => {
  const { userData } = useGitHubUser()

  return (
    <div className="github-user">
      <header className="header">
        <img className="avatar" src={userData.avatar_url} alt="GitHub avatar" />
        <Link className="names" href={userData.html_url} external>
          <span className="name">{userData.name}</span>
          <span className="login">@{userData.login}</span>
        </Link>
      </header>
      <p className="bio">{userData.bio}</p>
    </div>
  )
}

export default GitHubUser
