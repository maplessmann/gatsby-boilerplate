import { useEffect, useState } from 'react'
import services from 'services'

const useGitHubUser = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    services.github.getUser('maplessmann').then(setUserData)
  }, [])

  return {
    userData,
    isReady: Object.values(userData).length > 0,
  }
}

export default useGitHubUser
