import React from "react"
import Layout from '../components/layout'
import {Link} from "gatsby";
import Imieniny from '../components/imieniny'
import Maps from '../components/map'
import Form from '../components/form'
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
                        <div className='contactDataHolder'>
                            <Form/>
                            <Maps/>

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
        <h2>Pracownia florystyczna Kraspedia<br/>
            Adres: ul. Dziupli 8<br/>
            02-454 Warszawa<br/>
            Tel.kom. 693-270-482<br/>
            E-mail: kraspedia2010@gmail.com<br/>
            NIP: 757-138-43-80<br/>
            REGON: 142220473</h2>
    </div>



)