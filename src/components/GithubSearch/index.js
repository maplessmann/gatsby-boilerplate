import SearchBox from './SearchBox'
import UserCard from './UserCard'
import useGitHubSearch from 'hooks/useGitHubSearch'
import './GithubSearch.scss'

const GithubSearch = () => {
  const { userData, onSearch } = useGitHubSearch()

  return (
    <div className="github-search">
      <SearchBox onSearch={onSearch} />
      <UserCard userData={userData} />
    </div>
  )
}

export default GithubSearch
