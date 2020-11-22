import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Link from 'components/Link'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/example-image.jpg/" }) {
        childImageSharp {
          fixed(width: 600, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="home-page">
      <h1>Gatsby Advanced Boilerplate</h1>

      <Link
        external
        to="https://github.com/maplessmann/gatsby-advanced-boilerplate"
      >
        GitHub
      </Link>

      <h2>Images with lazy loading</h2>
      <Img fixed={data.file.childImageSharp.fixed} alt="Image example" />
      <p>
        See the{' '}
        <Link external to="https://www.gatsbyjs.org/docs/gatsby-image/">
          gatsby-image
        </Link>{' '}
        docs for more information
      </p>
    </div>
  )
}

export default IndexPage
