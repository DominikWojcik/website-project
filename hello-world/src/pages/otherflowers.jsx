import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'



class OtherFlowers extends React.Component{
    render() {
        return (
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
        );
    }
}


export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <OtherFlowers/>
            </MainBox>
        </Layout>
        <Footer/>
    </div>



)