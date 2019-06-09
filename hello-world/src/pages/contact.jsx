import React from "react"
import Layout from '../components/layout'
import Maps from '../components/map'
import Form from '../components/form'
import Header from '../components/header'
import Footer from '../components/footer'
import MainBox from '../components/mainbox'



class Contact extends React.Component{
    render() {
        return (
            <div className='contactDataHolder'>
                <Form/>
                <Maps/>
            </div>
        );
    }
}

class ContactData extends React.Component{
    render() {
        return (
            <div className='contactData'>
                <h2 className='contactDataFooter'>Pracownia florystyczna Kraspedia<br/>
                    Adres: ul. Dziupli 8<br/>
                    02-454 Warszawa<br/>
                    Tel.kom. 693-270-482<br/>
                    E-mail: kraspedia2010@gmail.com<br/>
                    NIP: 757-138-43-80<br/>
                    REGON: 142220473
                </h2>
                <a href="https://www.facebook.com/kraspedia.pracowniaflorystyczna">
                    <svg className='svgFb' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" >
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"/>
                    </svg>
                    </a>
            </div>

        );
    }
}



export default () => (
    <div>
        <Layout>
            <Header/>
            <MainBox>
                <Contact/>
            </MainBox>
        </Layout>
        <Footer/>
        <ContactData/>
    </div>



)