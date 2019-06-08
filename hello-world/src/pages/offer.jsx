import React from "react"
import Layout from '../components/layout'
import {Link} from "gatsby";
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'



class Offer extends React.Component{
    render() {
        return (
            <div className='linkHolderOffer'>
                <div><Link to='/weeding'>
                    <div className='weedingFlowers flowers'/>
                    <h2>Kwiaty na ślub</h2></Link>
                </div>
                <div><Link to='/otherflowers'>
                    <div className='otherFlowers flowers'/>
                    <h2>Kwiaty okazjonalne</h2></Link>
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
                <Offer/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)