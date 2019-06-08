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
                            <h2>Pełna klasy dekoracja samochodu, kwiaty, wstążki, ratany.</h2>
                            <p>Do przystrojenia auta powinno używać się żywych, a nie sztucznych kwiatów.
                                Popularne są dekoracje ażurowe, które doskonale podkreślają charakter tego szczególnego dnia. Należy dobrać kwiaty do charakteru auta, zwracając uwagę na kolor, gatunek, formę, a przede wszystkim na trwałość roślin.
                                Przeróżne są pomysły Młodych, a w połączeniu z doradztwem florysty da zapewne niesamowity efekt. Inaczej będzie strojone auto, jeśli do ślubu zamierzamy jechać nowoczesnym sportowym autem, a inaczej ponadczasowym samochodem… </p>
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