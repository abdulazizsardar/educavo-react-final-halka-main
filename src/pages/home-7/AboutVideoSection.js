import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

// About Image
import centerShape from '../../assets/img/video/video-bg.png';

import videoImg from '../../assets/img/video/1.jpg';

const AboutVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-about video-img">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
            <div className="container">
                <div class="img-part text-center">
                    <div class="media-icon ">
                        <img 
                            src={videoImg} 
                            alt="images" 
                        />
                        <a class="popup-videos" onClick={() => { openModal(); }}>
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="shape-bg-image">
                <img
                    src={centerShape}
                    alt="Shape Images"
                />
            </div>
        </div>
    );
}

export default AboutVideo;