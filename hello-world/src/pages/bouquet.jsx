import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'


class Bouquet extends React.Component{
    render() {
        return (
            <div className='bouquet'>
                <h2>Bukiet ślubny, wiązanka ślubna na uroczystość ślubu.</h2>
                <p>Z bukietem ślubnym jest tak jak ze strojem - nie wszystkim jest ładnie w tym samym. Dlatego bukiet trzeba dobrać do urody Panny Młodej, figury i całego jej stroju. Oglądając bukiety ślubne na zdjęciach łatwo się zachwycić i stwierdzić: ten i żaden inny. Zwłaszcza, że na zdjęciach widać zwykle tylko bukiet na białym tle sukni. W rzeczywistości "tłem" bukietu jest cała postać Panny Młodej. W wyborze wiązanki ślubnej warto kierować się tym, jak bukiet dopełni całą kreację i czy podkreśli naszą urodę.
                    Najbardziej popularnymi typami bukietów wybieranymi przez Panny młode są bukiety w kształcie biedermajera, kaskady, wiązanki czy w kształcie berła. </p>
            </div>
        );
    }
}


export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Bouquet/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)