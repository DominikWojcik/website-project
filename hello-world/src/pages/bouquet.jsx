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
                            <h2>Bukiet ślubny, wiązanka ślubna na uroczystość ślubu.</h2>
                            <p>Z bukietem ślubnym jest tak jak ze strojem - nie wszystkim jest ładnie w tym samym. Dlatego bukiet trzeba dobrać do urody Panny Młodej, figury i całego jej stroju. Oglądając bukiety ślubne na zdjęciach łatwo się zachwycić i stwierdzić: ten i żaden inny. Zwłaszcza, że na zdjęciach widać zwykle tylko bukiet na białym tle sukni. W rzeczywistości "tłem" bukietu jest cała postać Panny Młodej. W wyborze wiązanki ślubnej warto kierować się tym, jak bukiet dopełni całą kreację i czy podkreśli naszą urodę.
                                Najbardziej popularnymi typami bukietów wybieranymi przez Panny młode są bukiety w kształcie biedermajera, kaskady, wiązanki czy w kształcie berła. </p>
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