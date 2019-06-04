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
                        <h1 className='title'><ListLink to="/">Kraspedia</ListLink></h1>
                        <img className='titleLogo' src="https://img.icons8.com/nolan/96/000000/spring.png"/>
                        <h2 className='titleSmall'>pracownia florystyczna</h2>
                            <p>
                                Praca przy układaniu kwiatów z jednej z warszawskich kwiaciarni przerodziła się stopniowo w pasję i zamiłowanie do kwiatów. Pasja ta przeobraziła sie  ukończeniem na SGGW studiów podyplomowych o specjalności `Florystyka-sztuka układnia kwiatów`a następnie w powstaniem pracowni florystycznej pod nazwą Kraspedia.
                                Dla pracowni każde zlecenie jest dla nas nowym wyzwaniem, podchodząc do każdego indywidualnie, jestem w stanie sprostać oczekiwaniom najbardziej wymagających Klientów. Śledzię najnowsze trendy florystyczne, realizuje własne autorskie pomysły i wizje naszych Klientów. Artystyczne spojrzenie na świat roślin sprawia, że moje dekoracje doceniło już wiele firm. Kreatywność poparta wieloletnim doświadczeniem, wiedzą oraz wyobraźnią i wyczucie dobrego smaku pozwolą nam spełniać Państwa marzenia.
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}




export default () => (
    <Layout>
        <Header/>
        <MainBox/>
        <Footer/>
    </Layout>


)