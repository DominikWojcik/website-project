import React from "react"
import { Link } from "gatsby"
import MainBox from '../components/mainbox'
const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)



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
                    <li><ListLink to="/contact/">Allegro</ListLink></li>
                </ul>
            </div>
        );
    }
}

export default () => (
    <MainBox>
        <Lista/>
    </MainBox>

)