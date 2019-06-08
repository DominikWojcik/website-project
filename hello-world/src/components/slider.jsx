import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const Slideshow = () => {
    return (
        <div className='slider'>
            <Slide {...properties}>
                <div className="each-slide">
                    <div className= {`${slideImages[0]}`}>
                        {/*<span>Slide 1</span>*/}
                    </div>
                </div>
                <div className="each-slide">
                    <div className= {`${slideImages[1]}`}>
                        {/*<span>Slide 2</span>*/}
                    </div>
                </div>
                <div className="each-slide">
                    <div className= {`${slideImages[2]}`}>
                        {/*<span>Slide 3</span>*/}
                    </div>
                </div>
                <div className="each-slide">
                    <div className= {`${slideImages[3]}`}>
                        {/*<span>Slide 3</span>*/}
                    </div>
                </div>
                <div className="each-slide">
                    <div className= {`${slideImages[4]}`}>
                        {/*<span>Slide 3</span>*/}
                    </div>
                </div>
                <div className="each-slide">
                    <div className= {`${slideImages[5]}`}>
                        {/*<span>Slide 3</span>*/}
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default () => (

    <Slideshow/>



)