import SEO from '@components/SEO'

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <SEO />
      {children}
    </main>
  )
}

export default Layout