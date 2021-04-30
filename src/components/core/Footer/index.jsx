import { container } from '/src/styles/utils-css.js'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={container}>
      <div className={styles.links}>
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
