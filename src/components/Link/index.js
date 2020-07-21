import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, external, ...props }) => {
  return external ? (
    <a
      className="link"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink className="link" to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}

export default Link
