import React from "react";
import Iframe from 'react-iframe'

class Maps extends React.Component{
    render() {
        return (
            <div>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.0978180753855!2d20.92439225130393!3d52.20526986715885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471934b47728eaed%3A0x4b8bb1b89891f40c!2sPracownia+florystyczna+Kraspedia!5e0!3m2!1spl!2spl!4v1558874719571!5m2!1spl!2spl"        width="450px"
                        height="450px"
                        className="myMap"
                        position="relative"
                />
            </div>
        );
    }
}

export default ()=>(
    <Maps/>
)