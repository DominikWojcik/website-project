import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'


class Church extends React.Component{
    render() {
        return (
            <div className='bouquet'>
                <h2>Dekoracja Koscioła, wystruj krzeseł i klęczników oraz alejki kwiatowej.</h2>
                <p>Prawie każda Para planując przystrajanie kościoła powinnia zaczerpnąć propozycji i rad fachowca. Florystka zna swój fach i wie, że należy przy dekorowaniu głównie uwzględnić ołtarz, czy ławki w kościele. Jak należy ustawić kwiaty w podłużnym szpalerze, które to nadają magii tej ceremonii, aby każda Pani Młoda czuła się tego dnia wyjątkowo. Florystka przyozdabia krzesła, klęcznik, rozstawione świece, czy też zastosuje porozrzucane płatki kwiatów. Jest wiele pomysłów, które florystka może wykorzystać w aranżacji ślubnej </p>
            </div>
        );
    }
}


export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Church/>
            </MainBox>
        </Layout>
        <Footer/>
    </div>



)