import React from 'react';
import './AboutUS.css';
import IMG1 from '../images/PicsArt_02-18-12.12.10.jpg'

const AboutUS = () => {
    return (
        <div className="container mt-5 AboutUS">
            <div className="row">
                <div className="col-md-5">
                    <div className="images">
                        <span className=""></span>
                        <span className=""></span>
                        <span className=""></span>
                    </div>
                </div>
                <div className="col-md-7 p-5">
                    <h1 className="fw-bold">About US</h1>
                    <p className="mt-5 text-start">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
                    <p className=" text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;