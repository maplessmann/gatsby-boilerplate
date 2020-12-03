import { useEffect, useState } from 'react'
import services from 'services'

const useGitHubSearch = () => {
  const [username, setUsername] = useState('maplessmann')
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (username) {
      services.github.getUser(username).then(setUserData)
    }
  }, [username])

  const onSearch = e => {
    e.preventDefault()

    setUsername(e.target.username.value)
  }

  return {
    userData,
    onSearch,
  }
}

export default useGitHubSearch
