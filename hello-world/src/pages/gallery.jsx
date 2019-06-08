import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Slideshow from '../components/slider'
import MainBox from '../components/mainbox'





export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Slideshow/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)