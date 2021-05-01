import Logo from '/src/components/core/Logo'
import { Link } from 'hyperstatic'

import { css } from '/src/styles/stitches.config'
import { container } from '/src/styles/utils.css'

const header = css({
  margin: '3rem 0',
})
const inner = css({
  display: 'flex',
  alignItems: 'center',
  '& a:first-child': {
    marginInlineEnd: 'auto',
  },
  '& a:not(:first-child)': {
    marginInlineStart: '1rem',
  },
})
const composedInner = container(inner())

const Header = () => (
  <header className={header}>
    <div className={composedInner}>
      <Logo />
      <Link href="/secondary">Secondary page</Link>
      <Link href="/counter">Counter page</Link>
      <Link href="/characters">Character list</Link>
    </div>
  </header>
)

export default Header
