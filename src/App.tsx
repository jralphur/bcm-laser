import { Route, Switch } from 'wouter'
import './App.css'
import NotFound from './NotFound'
import Gallery from './Gallery'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/gallery"><Gallery /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </main>
      <footer>
        <span>Bayshore Custom Lasering</span>
        <span className="inline-vert-sep">|</span>
        <a href="mailto://bcm_laser@yahoo.com">Contact</a>
      </footer>
    </>
  )
}

export default App
