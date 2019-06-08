import React from "react"
import NameDay from '../components/imieniny'




class Footer extends React.Component{
    render() {
        return (
            <div className='footerBeam'>
                <div className='imgHolder'>
                    <img alt='icon' src="https://img.icons8.com/metro/26/000000/calendar-11.png"/>
                </div>
                <NameDay/>
            </div>
        );
    }
}

export default () => (

        <Footer/>



)