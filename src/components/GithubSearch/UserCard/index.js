import Link from 'components/Link'

import './UserCard.scss'

const UserCard = ({ userData }) => {
  return (
    <div className="user-card">
      <header className="header">
        <img className="avatar" src={userData?.avatarUrl} alt="GitHub avatar" />
        <Link className="names" to={userData?.url} external>
          <span className="name">{userData?.name}</span>
          <span className="login">@{userData?.login}</span>
        </Link>
      </header>
      <p className="bio">{userData?.bio}</p>
    </div>
  )
}

export default UserCard
