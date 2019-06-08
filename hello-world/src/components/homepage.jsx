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
                    <li><a href="https://www.facebook.com/kraspedia.pracowniaflorystyczna">Facebook</a></li>
                </ul>
            </div>
        );
    }
}

export default () => (
    <MainBoxHome/>

)