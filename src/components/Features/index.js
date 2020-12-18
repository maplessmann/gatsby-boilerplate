import Section from 'components/Section'

import './Features.scss'

const Features = () => {
  return (
    <Section title="Features" className="boilerplate-features">
      <ul className="list">
        <li className="item">PWA ready</li>
        <li className="item">SEO</li>
        <li className="item">Build time and runtime data fetching</li>
        <li className="item">Modern JavaScript</li>
        <li className="item">Fast build time (~ 1 min)</li>
        <li className="item">Google Analytics integration</li>
        <li className="item">Accessibility best practices</li>
      </ul>
    </Section>
  )
}

export default Features
