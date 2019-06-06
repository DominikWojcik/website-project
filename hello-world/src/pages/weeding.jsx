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
                        <div className='linkHolderOffer linkHolderSmall '>
                            <div className='flowersSmall'><Link to='/weeding'>
                                <div className='weedingFlowers flowers '/>
                                <h2>Bukiet Ślubny</h2></Link>
                            </div>
                            <div className='flowersSmall'><Link to='/otherflowers'>
                                <div className='chirchFlower flowers'/>
                                <h2>Dekoracja Kościoła</h2></Link>
                            </div>
                            <div className='flowersSmall'><Link to='/otherflowers'>
                                <div className='weedingRoom flowers'/>
                                <h2>Sala weselna</h2></Link>
                            </div>
                            <div className='flowersSmall'><Link to='/otherflowers'>
                                <div className='weedingCar flowers'/>
                                <h2>Dekoracja samochodu</h2></Link>
                            </div>
                            <div className='flowersSmall'><Link to='/otherflowers'>
                                <div className='jewelry flowers'/>
                                <h2>Bizuteria kwiatowa</h2></Link>
                            </div>
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