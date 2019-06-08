import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'



class Car extends React.Component{
    render() {
        return (
            <div className='bouquet'>
                <h2>Pełna klasy dekoracja samochodu, kwiaty, wstążki, ratany.</h2>
                <p>Do przystrojenia auta powinno używać się żywych, a nie sztucznych kwiatów.
                    Popularne są dekoracje ażurowe, które doskonale podkreślają charakter tego szczególnego dnia. Należy dobrać kwiaty do charakteru auta, zwracając uwagę na kolor, gatunek, formę, a przede wszystkim na trwałość roślin.
                    Przeróżne są pomysły Młodych, a w połączeniu z doradztwem florysty da zapewne niesamowity efekt. Inaczej będzie strojone auto, jeśli do ślubu zamierzamy jechać nowoczesnym sportowym autem, a inaczej ponadczasowym samochodem… </p>
            </div>
        );
    }
}




export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Car/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)