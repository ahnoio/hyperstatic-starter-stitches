import { Link } from 'hyperstatic'

import { container } from '/src/styles/utils-css.js'

const NotFoundPage = () => (
  <div className={container}>
    <h1>404.</h1>
    <p>Page not found.</p>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default NotFoundPage
