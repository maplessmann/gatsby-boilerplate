import SEO from '@components/SEO'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SEO />
      {children}
    </div>
  )
}

export default Layout