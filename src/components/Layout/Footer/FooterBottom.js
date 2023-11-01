import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-10">
                        <div className="copyright md-mb-0">
                            <p>© 2022 All Rights Reserved. Designed By <a href="#" target="_blank">RSTheme</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end md-text-left">
                        <ul className="copy-right-menu">
                            <li><Link to="/event" as="/event"><a>Event</a></Link></li>
                            <li><Link to="/blog" as="/blog"><a>Blog</a></Link></li>
                            <li><Link to="/contact" as="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;