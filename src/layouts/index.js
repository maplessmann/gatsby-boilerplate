import SEO from 'components/SEO'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <SEO />
      {children}
    </main>
  )
}

export default Layout