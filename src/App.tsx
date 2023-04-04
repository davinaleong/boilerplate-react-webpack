import './main.css'

import HTML5_LOGO from './images/html5-png.png'
import CSS3_LOGO from './images/css3-svg.svg'

import { CounterComponent } from './components/counter.component'

export const App = () => {
    const name = "Hello"
  return (
    <>
      <h1>Hello React Typescript Webpack Boilerplate</h1>
      <p>
        Environment: <strong>{process.env.NODE_ENV}</strong>
      </p>

      <CounterComponent />

      <p>
        <img src={HTML5_LOGO} alt="html5 logo" width="512" height="512" />
      </p>
      <p>
        <img src={CSS3_LOGO} alt="css3 logo" width="512" height="512" />
      </p>
    </>
  )
}
