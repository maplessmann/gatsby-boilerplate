import Page from 'components/Page'
import Link from 'components/Link'

const NotFoundPage = () => {
  return (
    <Page>
      <h1>Page not found</h1>
      <Link to="/">Back to Home</Link>
    </Page>
  )
}

export default NotFoundPage
