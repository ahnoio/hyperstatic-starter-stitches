import Header from '/src/components/core/Header'
import { Router } from 'hyperstatic'
import Footer from '/src/components/core/Footer'

// import '/src/styles/base.module.css'
import globalStyles from '/src/styles/base.css'


const App = (state) => {
  globalStyles()
  return (
    <main>
      <Header />
      <Router />
      <Footer />
    </main>
  )
}

export default App
