import { css } from '/src/styles/stitches.config'
import { container } from '/src/styles/utils.css'

const footer = css({
  margin: '3rem 0',
})
const links = css({
  display: 'flex',
  alignItems: 'center',
  '& a:first-child': {
    marginInlineEnd: 'auto',
  },
  '& a:not(:first-child)': {
    marginInlineStart: '1rem',
  },
})

const Footer = () => (
  <footer className={footer}>
    <div className={container}>
      <div className={links}>
        <a
          href="https://github.com/loteoo/hyperstatic-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          [source code]
        </a>
        <a
          href="https://github.com/jorgebucaran/hyperapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          hyperapp
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
