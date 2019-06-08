import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'


class WeedingRoom extends React.Component{
    render() {
        return (
            <div className='bouquet'>
                <h2>Sala weselna, dekorcja, wystruj stołów, ołtarza Państwa Młodych.</h2>
                <p>Podstawą dekoracji stołu weselnego, jak na każdym przyjęciu, jest elegancki obrus i zastawa. Kompozycje kwiatowe na nim ustawione powinny być niewysokie, tak aby nie zasłaniały siedzących naprzeciw siebie gości. Uzupełnieniem dekoracji mogą być również płatki kwiatów rozsypane na stołach oraz świece. Poniżej znajdą Państwo zdjęcia przykładowych, wykonanych przez nas dekoracji sal weselnych i stołów. Jeśli planujecie ślub - koniecznie skontaktujcie się z nami, a na pewno stworzymy dekoracje odpowiadające wszystkim Waszym oczekiwaniom.
                </p>
            </div>

        );
    }
}


export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <WeedingRoom/>
            </MainBox>
        </Layout>
        <Footer/>
    </div>



)