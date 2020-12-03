import SEO from 'components/SEO'
import Header from 'components/Header'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <SEO />
      <Header />
      {children}
    </main>
  )
}

export default Layout
