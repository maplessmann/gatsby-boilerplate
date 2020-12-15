import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import services from 'services'

const useGitHubSearch = () => {
  const githubData = useStaticQuery(graphql`
    query {
      github {
        user(login: "maplessmann") {
          avatarUrl
          login
          name
          url
          bio
        }
      }
    }
  `)
  const [userData, setUserData] = useState(githubData.github.user)

  const onSearch = e => {
    e.preventDefault()
    const username = e.target.username.value

    if (username) {
      services.github.getUser(username).then(setUserData)
    }
  }

  return {
    userData,
    onSearch,
  }
}

export default useGitHubSearch
