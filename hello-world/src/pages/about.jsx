import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'



class About extends React.Component{
    render() {
        return (
            <div>
                <p>
                    Praca przy układaniu kwiatów z jednej z warszawskich kwiaciarni przerodziła się stopniowo w pasję i zamiłowanie do kwiatów. <br/> Pasja ta wyraziła się ukończeniem na SGGW studiów podyplomowych o specjalności `Florystyka-sztuka układnia kwiatów`a następnie w powstaniem pracowni florystycznej pod nazwą Kraspedia.
                    <br/> Dla pracowni każde zlecenie jest nowym wyzwaniem, podchodząc do każdego indywidualnie, jestem w stanie sprostać oczekiwaniom najbardziej wymagających Klientów. Śledzię najnowsze trendy florystyczne, realizuje własne autorskie pomysły i wizje naszych Klientów. Artystyczne spojrzenie na świat roślin sprawia, że moje dekoracje doceniło już wielu klientów.
                </p>
                <p>Kreatywność poparta wieloletnim doświadczeniem, wiedzą oraz wyobraźnią i wyczucie dobrego smaku pozwolą nam spełniać Państwa marzenia.</p>
            </div>
        );
    }
}




export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <About/>
            </MainBox>

        </Layout>
        <Footer/>
    </div>



)