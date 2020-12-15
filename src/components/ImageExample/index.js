import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Section from 'components/Section'

const ImageExample = () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/example-image.jpg/" }) {
        ...FluidImage
      }
    }
  `)

  return (
    <Section title="Lazy load images" className="image-example">
      <Img
        className="image"
        fluid={data.file.childImageSharp.fluid}
        alt="Example image"
      />
    </Section>
  )
}

export default ImageExample

export const query = graphql`
  fragment FluidImage on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`
