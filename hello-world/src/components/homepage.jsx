import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
   );


class MainBoxHome extends React.Component{
    render() {
        return (
            <div className='mainBoxBackground'>
                <div className='mainBox'>
                    <div className='mainBoxHolder'>
                        <h1 className='title'><ListLink to="/">Kraspedia</ListLink></h1>
                        <img alt='flowerLogo' className='titleLogo' src="https://img.icons8.com/nolan/96/000000/spring.png"/>
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
                        <div className='iconFlower'/>
                        <ListLink to="/offer/">Oferta</ListLink>
                    </li>
                    <li><ListLink to="/weeding/">Kwiaty na ślub</ListLink></li>
                    <li><ListLink to="/otherflowers/">Kwiaty okazjonalne</ListLink></li>

                    <li>
                        <div className='iconFlower'/>
                        <ListLink to="/gallery/">Galeria</ListLink>
                    </li>

                    <li>
                        <div className='iconFlower'/>
                        <ListLink to="/about/">O nas</ListLink>
                    </li>
                    <li>
                        <div className='iconFlower'/>
                        <ListLink to="/contact/">Kontakt</ListLink>
                    </li>
                    <li>

                        <a href="https://www.facebook.com/kraspedia.pracowniaflorystyczna">
                            <svg className='svgFb' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"/>
                            </svg>
                            Facebook</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default () => (
    <MainBoxHome/>

)