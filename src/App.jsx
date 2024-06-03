import Footer from '~/components/Footer.jsx'
import AppRouter from './router/router.jsx'

function App() {
  return (
    <div flex="~ col items-center" m-auto  p-y-10>
      <AppRouter />
      <Footer></Footer>
    </div>
  )
}

export default App
