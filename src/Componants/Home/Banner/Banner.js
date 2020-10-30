import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import momin from '../../Images/momink.png';

const facebook = <FontAwesomeIcon icon={faFacebookF} />;
const instragram = <FontAwesomeIcon icon={faInstagram}/>;
const twitter = <FontAwesomeIcon icon={faTwitter}/>;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn}/>;


const Banner = () => {
    return (
        <section id="hom">
            <div className="container">
            <div className="row">
            <div className="col-lg-6 md-12">
                    <div className ="banner-content">
                        <h3>Hi there,</h3>
                        <h1>I'm Abir Hasan</h1>
                        <h4>Web Designer and Developer</h4>
                        <div className ="icons">
                            <a href="https://www.facebook.com/abir.green.cse" target="_blank">{facebook}</a>
                            <a href="https://www.instagram.com/abir_hasan_47/" target="_blank">{instragram}</a>
                            <a href="https://twitter.com/AbirHasan_2247" target="_blank">{twitter}</a>
                            <a href="https://www.linkedin.com/in/abir2247/" target="_blank">{linkedin}</a>
                        </div>
                        <a href="#" target="_blank" class="Cbtn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Hire Me</a>

                            <a href="https://drive.google.com/file/d/1Q75AR9iqDaGWWgF4GspfvpLngDW8eD1W/view#" target="_blank" class="Cbtn resumeBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Resume</a>
                    </div>
                </div>
                <div className ="col-lg-6 md-12">
                <div className ="hero-img">
                       <img class="img-fluid" src={momin} alt="momin khan" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;