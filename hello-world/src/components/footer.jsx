import React from "react"
import Imieniny from '../components/imieniny'




class Footer extends React.Component{
    render() {
        return (
            <div className='footerBeam'>
                <div className='imgHolder'>
                    <img src="https://img.icons8.com/metro/26/000000/calendar-11.png"/>
                </div>
                <Imieniny/>
            </div>
        );
    }
}

export default () => (

        <Footer/>



)