import React from "react"
import Layout from '../components/layout'
import {Link} from "gatsby";
import Header from '../components/header'
import Footer from '../components/footer'
const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


class MainBox extends React.Component{
    render() {
        return (
            <div className='mainBoxBackgroundBig'>
                <div className='mainBoxBig'>
                    <div className='mainBoxHolder'>
                        <div className='logoHolder'>
                            <h1 className='title'><ListLink to="/">Kraspedia</ListLink></h1>
                            <img className='titleLogo' src="https://img.icons8.com/nolan/96/000000/spring.png"/>
                            <h2 className='titleSmall'>pracownia florystyczna</h2>
                        </div>
                        <div className='bouquet'>
                            <h2>Sala weselna, dekorcja, wystruj stołów, ołtarza Państwa Młodych.</h2>
                            <p>Podstawą dekoracji stołu weselnego, jak na każdym przyjęciu, jest elegancki obrus i zastawa. Kompozycje kwiatowe na nim ustawione powinny być niewysokie, tak aby nie zasłaniały siedzących naprzeciw siebie gości. Uzupełnieniem dekoracji mogą być również płatki kwiatów rozsypane na stołach oraz świece. Poniżej znajdą Państwo zdjęcia przykładowych, wykonanych przez nas dekoracji sal weselnych i stołów. Jeśli planujecie ślub - koniecznie skontaktujcie się z nami, a na pewno stworzymy dekoracje odpowiadające wszystkim Waszym oczekiwaniom. </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}




export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox/>

        </Layout>
        <Footer/>
    </div>



)