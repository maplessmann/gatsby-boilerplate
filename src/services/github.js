const formatReponse = response => ({
  ...response,
  url: response?.html_url,
  avatarUrl: response?.avatar_url,
})

const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`, {
    method: `GET`,
    headers: {
      Accept: `application/json`,
    },
  })
    .then(response => response.json())
    .then(formatReponse)
}

export default {
  getUser,
}
