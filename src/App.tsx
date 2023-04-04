import './main.css'
import HTML5_LOGO from './images/html5-png.png'
import CSS3_LOGO from './images/css3-svg.svg'

export const App = () => {
    return (
        <>
            <h1>React Typescript Webpack Boilerplate</h1>

            <p><img src={HTML5_LOGO} alt="html5 logo" width="512" height="512"/></p>
            <p><img src={CSS3_LOGO} alt="css3 logo" width="512" height="512"/></p>
        </>
    )
}