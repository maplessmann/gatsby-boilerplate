import SearchBox from 'components/SearchBox'
import UserCard from 'components/UserCard'
import useGitHubSearch from 'hooks/useGitHubSearch'
import './index.scss'

const GitHubSearch = () => {
  const { userData, onSearch } = useGitHubSearch()

  return (
    <div className="github-search">
      <SearchBox onSearch={onSearch} />
      <UserCard userData={userData} />
    </div>
  )
}

export default GitHubSearch
