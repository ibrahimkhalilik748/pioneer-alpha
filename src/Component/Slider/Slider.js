import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import IMG1 from '../images/PicsArt_02-18-12.12.10.jpg'
import Navigation from '../Navigation/Navigation';
import './Slider.css';


const Slider = () => {
    return (
        <div className="slider">
            <Navigation />

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={IMG1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-block text-start text">
                        <div className="text">
                            <h1 className="fw-bold">A picture is worth a thousand words</h1>
                            <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                            <button className="btn btn-outline-danger">View Gallery</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={IMG1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="d-block text-start text">
                        <div className="text">
                            <h1 className="fw-bold">A picture is worth a thousand words</h1>
                            <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                            <button className="btn btn-outline-danger">View Gallery</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={IMG1}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="d-block text-start text">
                        <div className="text">
                            <h1 className="fw-bold">A picture is worth a thousand words</h1>
                            <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                            <button className="btn btn-outline-danger">View Gallery</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;