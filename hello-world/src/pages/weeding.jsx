import React from "react"
import Layout from '../components/layout'
import {Link} from "gatsby";
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'


class Weeding extends React.Component{
    render() {
        return (
            <div className='linkHolderOffer linkHolderSmall '>
                <div className='flowersSmall'><Link to='/bouquet'>
                    <div className='weedingFlowers flowers '/>
                    <h2>Bukiet Ślubny</h2></Link>
                </div>
                <div className='flowersSmall'><Link to='/church'>
                    <div className='chirchFlower flowers'/>
                    <h2>Dekoracja Kościoła</h2></Link>
                </div>
                <div className='flowersSmall'><Link to='/weedingroom'>
                    <div className='weedingRoom flowers'/>
                    <h2>Sala weselna</h2></Link>
                </div>
                <div className='flowersSmall'><Link to='/car'>
                    <div className='weedingCar flowers'/>
                    <h2>Dekoracja samochodu</h2></Link>
                </div>
                <div className='flowersSmall'><Link to='/jewelry'>
                    <div className='jewelry flowers'/>
                    <h2>Bizuteria kwiatowa</h2></Link>
                </div>
            </div>
        );
    }
}


export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Weeding/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)