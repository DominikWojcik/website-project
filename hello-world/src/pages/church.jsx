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
                            <h2>Dekoracja Koscioła, wystruj krzeseł i klęczników oraz alejki kwiatowej.</h2>
                            <p>Prawie każda Para planując przystrajanie kościoła powinnia zaczerpnąć propozycji i rad fachowca. Florystka zna swój fach i wie, że należy przy dekorowaniu głównie uwzględnić ołtarz, czy ławki w kościele. Jak należy ustawić kwiaty w podłużnym szpalerze, które to nadają magii tej ceremonii, aby każda Pani Młoda czuła się tego dnia wyjątkowo. Florystka przyozdabia krzesła, klęcznik, rozstawione świece, czy też zastosuje porozrzucane płatki kwiatów. Jest wiele pomysłów, które florystka może wykorzystać w aranżacji ślubnej </p>
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