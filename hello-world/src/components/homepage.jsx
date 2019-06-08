import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


class MainBox extends React.Component{
    render() {
        return (
            <div className='mainBoxBackground'>
                <div className='mainBox'>
                    <div className='mainBoxHolder'>
                        <h1 className='title'><ListLink to="/">Kraspedia</ListLink></h1>
                        <img className='titleLogo' src="https://img.icons8.com/nolan/96/000000/spring.png"/>
                        <h2 className='titleSmall'>pracownia florystyczna</h2>
                            <Lista/>
                    </div>
                </div>
            </div>
        );
    }
}


//lista linków na głównej stronie
class Lista extends React.Component{
    render() {
        return (
            <div className='linkHolder'>
                <ul style={{ listStyle: `none` }}>
                    <li>
                        <img alt='flower' src="https://img.icons8.com/material/26/000000/flower.png"/>
                        <ListLink to="/about/">O nas</ListLink>
                    </li>
                    <li>
                        <img alt='flower' src="https://img.icons8.com/material/26/000000/flower.png"/>
                        <ListLink to="/offer/">Oferta</ListLink>
                    </li>
                    <li><ListLink to="/offer/">Kwiaty na ślub</ListLink></li>
                    <li><ListLink to="/offer/">Kwiaty okazjonalne</ListLink></li>
                    <li>
                        <img alt='flower' src="https://img.icons8.com/material/26/000000/flower.png"/>
                        <ListLink to="/offer/">Galeria</ListLink>
                    </li>
                    <li>
                        <img alt='flower' src="https://img.icons8.com/material/26/000000/flower.png"/>
                        <ListLink to="/contact/">Kontakt</ListLink>
                    </li>
                    <li><a href="https://www.facebook.com/kraspedia.pracowniaflorystyczna">Facebook</a></li>
                </ul>
            </div>
        );
    }
}

export default () => (
    <MainBox/>

)