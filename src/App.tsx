import './main.css'
import html5Img from './html5-png.png'
import css3Img from './css3-svg.svg'

export const App = () => {
    return (
        <>
            <h1>React Typescript Webpack Boilerplate</h1>

            <p><img src={html5Img} alt="html5 logo" width="512" height="512"/></p>
            <p><img src={css3Img} alt="css3 logo" width="512" height="512"/></p>
        </>
    )
}