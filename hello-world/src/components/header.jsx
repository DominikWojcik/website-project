import React from "react"
import {Link} from "gatsby";

const ListLink = props => (
        <Link to={props.to}>{props.children}</Link>
)



class Header extends React.Component{
    render() {
        return (
            <div className='headerBeam'>
                <div className='nav-headder'>
                    <ul>
                        <li><ListLink to="/">Strona główna</ListLink></li>
                        <li><ListLink to="/about/">O nas</ListLink></li>
                        <li><ListLink to="/offer/">Oferta</ListLink></li>
                        <li><ListLink to="/gallery/">Galeria</ListLink></li>
                        <li><ListLink to="/contact/">Kontakt</ListLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}



export default () => (

        <Header/>



)