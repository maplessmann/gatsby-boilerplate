import './Section.scss'

const Section = ({ children, title, className = '' }) => {
  return (
    <section className={`section ${className}`}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  )
}

export default Section
