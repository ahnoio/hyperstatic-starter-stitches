import logoSrc from '/src/assets/logo.png'

import { Link } from 'hyperstatic'

import { css } from '/src/styles/stitches.config'

const logo = css({
  display: 'block',
  width: '2rem',
})

const Logo = () => (
  <Link href="/" className={logo}>
    <img src={logoSrc} alt="Main logo" width="32" height="32" />
  </Link>
)

export default Logo
