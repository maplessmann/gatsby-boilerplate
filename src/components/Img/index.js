import GatsbyImage from 'gatsby-image'

const Img = ({ ...props }) => {
  return <GatsbyImage className="image" {...props} />
}

export default Img
