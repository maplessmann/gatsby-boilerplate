import Link from 'components/Link'
import './index.scss'

const UserCard = ({ userData }) => {
  const hasUserData = Object.values(userData).length > 0

  if (!hasUserData) return null

  return (
    <div className="user-card">
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

export default UserCard
