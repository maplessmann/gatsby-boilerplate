import Section from 'components/Section'
import SearchBox from './SearchBox'
import UserCard from './UserCard'
import useGitHubSearch from 'hooks/useGitHubSearch'

import './GithubSearch.scss'

const GithubSearch = () => {
  const { userData, onSearch } = useGitHubSearch()

  return (
    <Section title="Try me" className="github-search">
      <SearchBox onSearch={onSearch} />
      <UserCard userData={userData} />
    </Section>
  )
}

export default GithubSearch
