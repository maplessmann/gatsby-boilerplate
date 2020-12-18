import Page from 'components/Page'
import Features from 'components/Features'
import GithubSearch from 'components/GithubSearch'
import ImageExample from 'components/ImageExample'

const HomePage = () => {
  return (
    <Page>
      <Features />
      <GithubSearch />
      <ImageExample />
    </Page>
  )
}

export default HomePage
