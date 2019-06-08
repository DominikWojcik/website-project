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
            <h2 className='contactDataFooter'>Pracownia florystyczna Kraspedia<br/>
                Adres: ul. Dziupli 8<br/>
                02-454 Warszawa<br/>
                Tel.kom. 693-270-482<br/>
                E-mail: kraspedia2010@gmail.com<br/>
                NIP: 757-138-43-80<br/>
                REGON: 142220473
            </h2>
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