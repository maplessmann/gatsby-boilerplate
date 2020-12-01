const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`, {
    method: `GET`,
    headers: {
      Accept: `application/json`,
    },
  }).then(response => response.json())
}

export default {
  getUser,
}
