import SearchBox from 'components/SearchBox'
import UserCard from 'components/UserCard'
import useGitHubSearch from 'hooks/useGitHubSearch'
import './index.scss'

const GitHubSearch = () => {
  const { userData, onSearch } = useGitHubSearch()

  return (
    <div className="github-search">
      <h2 className="title">Try me</h2>
      <SearchBox onSearch={onSearch} />
      <UserCard userData={userData} />
    </div>
  )
}

export default GitHubSearch
