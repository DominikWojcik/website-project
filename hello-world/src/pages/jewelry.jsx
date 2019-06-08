import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'


class Jewelry extends React.Component{
    render() {
        return (
            <div className='bouquet'>
                <h2>Bizuteria kwiatowa to subtelny dodatek, który doskonale uzupełnia bukiet ślubny.</h2>
                <p>Elementem bukietu ślubnego może być urokliwa biżuteria roślinna. Biżuteria kwiatowa to nowoczesna propozycja dla Panny Młodej, świadkowej, druhen lub mam przyszłych małżonków. Tak jak butonierki podkreślają i wyróżniają ważnych mężczyzn obecnych na ślubie i weselu tak bransoletki, naszyjniki lub broszki w subtelny sposób wyróżnią spośród innych gości Panie, które są bliskie lub ważne dla Państwa Młodych. Bardzo dobrze znane i stosowane od dawna ozdoby z żywych kwiatów u dziewczynek przystępujących do Pierwszej Komunii, coraz śmielej wkraczają w zaczarowany świat mody ślubnej.  </p>
            </div>
        );
    }
}




export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Jewelry/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)