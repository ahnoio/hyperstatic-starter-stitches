import { Link } from 'hyperstatic'

import { container } from '/src/styles/utils-css.js'

const SecondaryPage = () => (
  <div className={container}>
    <h1>Hello from secondary page</h1>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default SecondaryPage
