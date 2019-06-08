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
                            <h2>Kwiaty Okazjonalne na każdą okazję, wieńce, stroiki, bukiety, przypinki.</h2>
                            <p>Słowo flortystyka czyli sztuka układania kwiatów i innych elementów roślinnych w różnorodne kompozycje. Nasza pracownia oferuje cały wachlarz usług florystycznych w zakresie :</p>

                                <ul className='otherOffer'>

                                    <li>Biżuteria kwiatowa, butonierki, przypinki</li>

                                    <li>Kompozycje kwiatowe z kwiatów żywych, sztucznych,</li>

                                    <li>Wianuszki, bukieciki komunijne,</li>

                                    <li>Stroiki Bożonarodzeniowe, Wielkanocne,</li>

                                    <li>Wiązanki, wieńce pogrzebowe,</li>

                                    <li>Aranżacje wnętrz,</li>

                                    <li>Opieka nad roślinnością w domu, biurze, ogrodzie</li>
                                </ul>
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